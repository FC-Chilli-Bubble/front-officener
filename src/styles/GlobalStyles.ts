import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${reset}

  #root {
    font-family: "Pretendard Variable", sans-serif;
    background-color: #eee;
    height: 100%;
  }

  html {
    height: 100%;
  } 

  body {
    height: 100%;
    color: #000;
  }

  *{
    box-sizing: border-box;
  }

  ol, ul{
    list-style: none;
  }
`;

export default GlobalStyles;