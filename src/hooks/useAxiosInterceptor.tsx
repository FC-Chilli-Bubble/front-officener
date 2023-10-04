import { useEffect } from 'react';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useCookies } from 'react-cookie';
import { useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { apiClient } from '@/apis/apiClient';
import { IErrorResponse } from '@/types/Common/IErrorResponse';
import { userInfoAtom } from '@/states/userDataAtom';
import { useModal } from '@/hooks/useModal';

import MODAL_DATAS from '@/constants/modalDatas';
const useAxiosInterceptor = () => {
  const { openModal } = useModal();
  const [cookies, removeCookie] = useCookies(['token']);
  const accessToken = cookies.token || ''; // 쿠키에 저장된 토큰 값
  const clearUser = useResetRecoilState(userInfoAtom);
  const navigate = useNavigate();

  // 응답 공통 에러 처리
  const handleError = async (error: AxiosError) => {
    // 인증 에러 처리
    if (error.response?.status === 401 && error.config?.url !== '/api/login') {
      // 로그인 세션 만료 팝업
      openModal({
        ...MODAL_DATAS.SESSION_EXPIRATION_ALERT,
        positiveCallback: () => {
          clearUser(); // 리코일 유저 정보 삭제
          removeCookie('token', { path: '/' });
          navigate('/login', { replace: true });
          // 스택 초기화 추가 작성 필요
        }
      });
      // 이행되지 않는 Promise를 반환하여 Promise Chaining 끊어주기
      return new Promise(() => { });
    }

    return Promise.reject<IErrorResponse>(
      (error.response?.data as IErrorResponse) || { errorMessage: error.message }
    );
  };

  const authConfig = (config: InternalAxiosRequestConfig<unknown>) => {
    if (config.headers && accessToken) {
      // AccessToken이 정상적으로 저장되어 있으면 headers에 Authorization에 값을 추가해준다.
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  };

  const requestInterceptor = apiClient.interceptors.request.use(authConfig, handleError);

  const responseInterceptor = apiClient.interceptors.response.use(
    response => response,
    handleError
  );

  useEffect(() => {
    return () => {
      // interceptor 해제
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);
};

export default useAxiosInterceptor;
