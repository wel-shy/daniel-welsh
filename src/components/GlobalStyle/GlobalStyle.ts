import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system, Roboto, sans-serif, serif;
    font-size: 14px;
    margin: auto;
    max-width: 1000px;
    min-height: 100vh;
    padding: 2em;
    font-family: "Inter", sans-serif;
    font-size: ${({ theme }) => theme.fontSize}px;

    @media (max-width: 768px) {
      max-width: 90vw;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Bitter', serif;
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
