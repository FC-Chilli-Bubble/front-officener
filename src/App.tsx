import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/GlobalStyles";
import theme from "@/styles/theme";
import Modal from "@/components/Common/Modal";
import useAxiosInterceptor from "@/hooks/useAxiosInterceptor";

const App = () => {
  // Axios Interceptor Hooks
  useAxiosInterceptor();

  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Outlet />
          <Modal />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};


export default App;
