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

    @media (max-width: 1000px) {
      max-width: 90vw;
    }
  }

  p {
    margin-bottom: 2em;
  }

  code {
    background-color: "#FFF4DB";
    border-radius: 4px;
    color: "#8A6534";
    font-size: "1.25rem";
    padding: 4px;
  }

  ul {
    margin-bottom: 96;
    padding-left: 0;
  }
`;

export default GlobalStyle;
