import styled from "styled-components";

const LoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 35vh;

  img {
    width: 150px;
    height: 0 auto;
    animation: spin 3s cubic-bezier(0.5, 0.25, 0.5, 0.75) infinite;
    cursor: wait;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingStyled;
