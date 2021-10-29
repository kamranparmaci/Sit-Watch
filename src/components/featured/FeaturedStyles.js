import styled from "styled-components";

export const SectionFeatures = styled.section`
  min-height: 100%;
  padding: 5rem 0;
  background: linear-gradient(
    0deg,
    rgba(9, 68, 129, 0.8085609243697479) 6%,
    rgba(5, 40, 77, 0.9122023809523809) 49%,
    rgba(5, 18, 31, 0.9346113445378151) 86%
  );

  @media only screen and (max-width: 600px) {
    padding: 2.5rem 0;
  }
`;

export const FeaturedH1 = styled.h1`
  color: #fff;
  font-size: 36px;
  position: relative;
  margin-left: 2%;

  @media only screen and (max-width: 600px) {
    font-size: 24px;

    &:after {
      top: 37px;
      width: 35%;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 24px;

    &:after {
      top: 37px;
      width: 35%;
    }
  }
`;
