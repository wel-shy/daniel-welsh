import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.6);
  border-radius: 15px;

  h1 {
    margin-bottom: 0.5em;
    font-size: 2.5em;
  }

  p {
    margin: 0;
  }

  .location {
    font-style: italic;
  }

  .details {
    padding: 2em;
    grid-area: 1/1;
    position: relative;
    background-image: linear-gradient(
      135deg,
      ${({ theme }) => theme.background} 3%,
      rgba(255, 255, 255, 0) 78%,
      ${({ theme }) => theme.background} 100%
    );
    border-radius: 15px;
    display: flex;
    flex-direction: column;
  }

  .summary {
    flex: 1;
  }
`;
