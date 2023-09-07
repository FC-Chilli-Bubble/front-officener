import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/GlobalStyles";
import theme from "@/styles/theme";


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Outlet />
      </ThemeProvider>
    </>
  );
};


export default App;
