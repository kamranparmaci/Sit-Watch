import styled, { css, keyframes } from "styled-components";

export const HorizontalContainer = styled.div`
  display: flex;
  overflow: auto hidden;
`;

const StylTabContent = css`
  width: 508px;
  height: 300px;

  ${({ posterSize }) =>
    posterSize &&
    css`
      width: auto;
    `}

  @media screen and (max-width: 1024px) {
    width: 308px;
    height: 180px;

    ${({ posterSize }) =>
      posterSize &&
      css`
        width: auto;
      `}
  }
`;

export const TabContentContainer = styled.div`
  ${StylTabContent};
`;

export const Trailer = styled.iframe`
  ${StylTabContent};
`;

export const ImgTab = styled.img`
  ${StylTabContent};
`;

const fadeEffect = keyframes`
0% {
  opacity: 0
}
100% {
  opacity: 1
}
`;

export const Tab = styled.div`
  overflow: hidden;

  button {
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;

    &:nth-of-type(1) {
      font-size: clamp(0.75rem, 7vw, 1.5rem);
      margin-right: 3rem;
      margin-left: -1rem;
    }
  }

  button.active {
    background-color: #f4f4f4;
  }
`;
export const TabContent = styled.div`
  display: none;
  padding: 6px 0;
  -webkit-animation: ${fadeEffect} 1s;
  animation: ${fadeEffect} 1s;
`;
