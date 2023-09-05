import { Outlet } from "react-router-dom";
import { ThemeProvider, styled } from "styled-components";

import GlobalStyles from "@/styles/GlobalStyles";
import Layout from "@/components/Common/Layout";
import theme from "@/styles/theme";


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          {/* TODO : Header Component 추가  */}
          <StyledBox>
            <Outlet />
          </StyledBox>
          {/* TODO : Bottom Navigation Component 추가  */}
        </Layout>
      </ThemeProvider>
    </>
  );
};

const StyledBox = styled.div`
  flex: 1 1 0%;
  padding: 0 16px;
`;

export default App;
