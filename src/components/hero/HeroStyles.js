import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroSection = styled.section`
  position: relative;
  height: 60vh;
  width: 100%;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    height: 40vh;
  }
`;

export const HeroWrapper = styled.div`
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: clamp(1rem, 8vw, 2.5rem);
    font-weight: 900;
    text-align: left;
    width: 100%;
    z-index: 10;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    margin-top: 30px;
  }

  h3 {
    font-weight: 400;
    font-size: clamp(0.75rem, 8vw, 1.8rem);
    z-index: 10;
    color: #fff;
    width: 50%;
    line-height: 2.5rem;
    font-family: "Montserrat", sans-serif;
    margin-top: 30px;
  }

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      font-size: clamp(0.75rem, 8vw, 1.8rem);
    }

    h3 {
      font-size: clamp(0.75rem, 8vw, 1.5rem);
      width: 100%;
      line-height: 2rem;
      margin-top: 20px;
    }
  }
`;
export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    opacity: 0.7;
    overflow: hidden;
    background: linear-gradient(
      0deg,
      rgba(9, 68, 129, 0.8) 9%,
      rgba(5, 40, 77, 0.49) 49%,
      rgba(5, 18, 31, 0.93) 92%
    );
  }
`;
export const HeroImage = styled.img`
  width: 100%;
  min-height: 100%;
  /* object-fit: fill; */
  /* object-position: center 45%; */
  /* background-repeat: no-repeat;  */
`;

export const BtnLight = styled(Link)`
  display: inline-block;
  color: #fff;
  border: #fff;
  margin-top: 30px;
  background-color: var(--secondary-color);
  border-radius: 50px;
  padding: 0.75rem 1.2rem;
  z-index: 10;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 0.5rem 1rem;
    margin-top: 20px;
  }
`;
