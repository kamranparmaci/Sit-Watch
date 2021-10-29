import styled, { keyframes } from "styled-components";

const modal = keyframes`
0% {
  opacity: 0
}
100% {
  opacity: 1
}
`;

export const ShowHideModal = styled.div`
  display: ${(props) => props.show};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  border: none;
`;

export const ModalMain = styled.section`
  position: absolute;
  background: white;
  width: 80%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${modal} 0.3s linear;

  @media screen and (max-width: 600px) {
    height: 330px;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 0 1rem;
`;

export const ModalH3 = styled.h3`
  display: inline-block;
  font-size: clamp(0.75rem, 8vw, 1.5rem);
`;

export const Trailer = styled.iframe`
  width: 100%;
  height: 94.6%;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 89%;
  }
`;

export const HideModal = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
`;
