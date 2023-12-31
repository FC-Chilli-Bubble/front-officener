import { Outlet, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider } from 'react-cookie';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/states/userDataAtom';
import { useEffect } from 'react';

import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import Modal from '@/components/Common/Modal';
import useAxiosInterceptor from '@/hooks/useAxiosInterceptor';
import useFcmToken from '@/hooks/useFcmToken';
import '@/firebase-messaging-sw.ts';

const App = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();
  const { requestFcmTokenPermission } = useFcmToken();
  // Axios Interceptor Hooks
  useAxiosInterceptor();

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      e.preventDefault();
      window.scrollTo(0, 0);
    });
    // FCM Token 요청
    requestFcmTokenPermission();
  }, []);

  useEffect(() => {
    if (!userInfo.userInfo.token) {
      navigate('/intro', { replace: true });
    }
  }, [userInfo, navigate]);



  return (
    <>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Outlet />
          <Modal />
        </ThemeProvider>
      </CookiesProvider>
    </>
  );
};

export default App;
