import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  width: ${(props) => props.width && `${props.width}px`};
  height: ${(props) => props.height && `${props.height}px`};
  cursor: pointer;

  ${(props) =>
    props.margin &&
    css`
      margin: 0 1rem 1rem 0;
    `}

  ${(props) =>
    props.peopleSize &&
    css`
      width: 225px;
      height: 300px;
    `}

  @media screen and (max-width: 500px) {
    ${(props) =>
      props.peopleSize &&
      css`
        width: 100%;
        height: 215px;
      `}
    ${(props) =>
      props.movieAndTvSize &&
      css`
        flex-direction: row;
        width: 99.7%;
        height: 145px;
      `}
  }

  @media screen and (min-width: 501px) and (max-width: 1024px) {
    ${(props) =>
      props.movieAndTvSize &&
      css`
        flex-direction: row;
        width: 99.7%;
        height: 170px;
      `}
  }
`;

export const CardImage = styled.img`
  width: ${(props) => props.width && `${props.width}px`};
  height: ${(props) => props.height && `${props.height - 110}px`};
  object-position: center 15%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;

  ${(props) =>
    props.peopleSize &&
    css`
      width: 100%;
      height: 235px;
    `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 500px) {
    ${(props) =>
      props.peopleSize &&
      css`
        width: 100%;
        height: 165px;
      `}
    ${(props) =>
      props.movieAndTvSize &&
      css`
        width: 22%;
        height: 100%;
        border-radius: 5px 0 0 5px;
      `}
  }

  @media screen and (min-width: 501px) and (max-width: 768px) {
    ${(props) =>
      props.peopleSize &&
      css`
        height: 235px;
      `}
    ${(props) =>
      props.movieAndTvSize &&
      css`
        width: 27%;
        height: 100%;
        border-radius: 5px 0 0 5px;
      `}
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    ${(props) =>
      props.movieAndTvSize &&
      css`
        width: 24%;
        height: 100%;
        border-radius: 5px 0 0 5px;
      `}
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    ${(props) =>
      props.peopleSize &&
      css`
        width: 100%;
        height: 235px;
      `}
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding: 0.5rem;

  @media screen and (max-width: 600px) {
    padding: 0.35rem;

    ${(props) =>
      props.movieAndTvSize &&
      css`
        padding: 1rem 0.75rem;
      `}
  }

  h4 {
    font-size: 1rem;

    @media screen and (max-width: 600px) {
      ${(props) =>
        props.peopleSize &&
        css`
          font-size: 0.85rem;
        `}
      ${(props) =>
        props.movieAndTvSize &&
        css`
          font-size: 0.75rem;
        `}
    }
  }
`;

export const P = styled.p`
  color: #777;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 0.85rem;
  flex-wrap: nowrap;
  align-items: flex-start;

  @media screen and (max-width: 600px) {
    ${(props) =>
      props.peopleSize &&
      css`
        font-size: 0.75rem;
      `}
  }
  @media screen and (max-width: 768px) {
    ${(props) =>
      props.movieAndTvSize &&
      css`
        padding-bottom: 0.75rem;
        font-size: 0.65rem;
      `}
  }
`;

export const H5 = styled.h5`
  display: none;
  @media screen and (max-width: 768px) {
    ${(props) =>
      props.movieAndTvSize &&
      css`
        color: #555;
        display: block;
        font-size: 0.65rem;
      `}
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    ${(props) =>
      props.movieAndTvSize &&
      css`
        color: #555;
        display: block;
        font-size: 0.9rem;
      `}
  }
`;
