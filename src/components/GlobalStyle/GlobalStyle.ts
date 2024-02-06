import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #1f1f1f;
    color: #cfcfcf;
    font-family: -apple-system, Roboto, sans-serif, serif;
    font-size: 14px;
    padding: 2em;
    min-height: 100vh;
    max-width: 1000px;
    margin: auto;

    @media (max-width: 768px) {
      max-width: 90vw;
    }
  }

  p {
    margin-bottom: 2em;
  }

  ul {
    margin-bottom: 96;
    padding-left: 0;
  }

  h4 {
    margin-top: 0;
  }
`;

export default GlobalStyle;
