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

const App = () => {
  const userInfo = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();
  // Axios Interceptor Hooks
  useAxiosInterceptor();

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
