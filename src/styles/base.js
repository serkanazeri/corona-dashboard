import styled, { keyframes } from "styled-components";

export const AppContainer = styled.main`
  padding: 0 0.5%;
  @media (max-width: 767px) {
    padding: 0;
  }
`;

const spin = keyframes`
  0% {
    translateY(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -2em 0 0 -2em;
  width: 4em;
  height: 4em;
  border-radius: 50%;
  border: 0.6em solid rgba(51, 51, 51, 0.3);
  border-top-color: #333;
  animation: 1.5s ${spin} infinite linear;
`;
