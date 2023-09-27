import { Outlet } from 'react-router-dom';
// import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { CookiesProvider } from 'react-cookie';

import GlobalStyles from '@/styles/GlobalStyles';
import theme from '@/styles/theme';
import Modal from '@/components/Common/Modal';
import useAxiosInterceptor from '@/hooks/useAxiosInterceptor';

const App = () => {
  // Axios Interceptor Hooks
  useAxiosInterceptor();

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
