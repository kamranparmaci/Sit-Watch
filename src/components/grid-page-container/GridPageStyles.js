import styled from "styled-components";

export const GridBackground = styled.div`
  background-color: #fff;
  padding: 2rem 0;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr auto;
  row-gap: 2.5rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.25rem;
  }

  @media screen and (min-width: 1025px) and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
  }
`;

export const GridContainerPeople = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr auto;
  row-gap: 2.5rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1.25rem;
  }

  @media screen and (min-width: 501px) and (max-width: 750px) {
    grid-template-columns: 1fr auto;
    column-gap: 1.25rem;
  }

  @media screen and (min-width: 751px) and (max-width: 980px) {
    grid-template-columns: 1fr 1fr auto;
  }

  @media screen and (min-width: 981px) and (max-width: 1240px) {
    grid-template-columns: 1fr 1fr 1fr auto;
  }
`;

export const FeaturedH1 = styled.h1`
  color: #555;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;
