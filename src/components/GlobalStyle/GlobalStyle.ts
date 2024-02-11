import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
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
    color: ${({ theme }) => theme.text};
  }

  h4 {
    margin-top: 0;
  }

  a {
    color: ${({ theme }) => theme.accent};
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }
`;

export default GlobalStyle;
