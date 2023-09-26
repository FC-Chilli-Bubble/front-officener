import { useEffect } from 'react';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { useCookies } from 'react-cookie';

import { apiClient } from "@/apis/apiClient";
import { IErrorResponse } from '@/types/Common/IErrorResponse';

const useAxiosInterceptor = () => {
  const [cookies] = useCookies(['token']);
  const accessToken = cookies.token || ''; // TODO : 쿠키에 저장된 토큰 값

  // 응답 공통 에러 처리
  const handleError = (error: AxiosError) => {
    // TODO : 401 인증 에러 처리 추가 필요
    // TODO : 인증 에러 시 로그아웃 처리
    return Promise.reject<IErrorResponse>(error.response?.data as IErrorResponse || { errorMessage: error.message });
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