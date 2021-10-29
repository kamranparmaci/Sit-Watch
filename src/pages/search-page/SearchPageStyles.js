import styled from "styled-components";

export const SearchContainer = styled.div`
  background: #fff;
  padding: 4rem 0;
`;

export const GridSearch = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CardContainer = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  width: 99%;
  height: 130px;
  cursor: pointer;
  margin-bottom: 1rem;
`;
export const CardImage = styled.img`
  width: 25%;
  height: 100%;
  object-position: center top;
  object-fit: cover;
  border: 1px solid #777;
  border-radius: 5px 0 0 5px;
`;
export const TextContainer = styled.div`
  padding: 0 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.75rem;
  flex: 4;
`;
export const P = styled.p`
  color: #333;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 0.85rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
`;
