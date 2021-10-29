import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const FooterBackground = styled.footer`
  background-color: transparent;
  margin: 3rem auto;

  @media screen and (max-width: 600px) {
    margin: 2rem auto;
  }
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  color: #999;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media screen and (min-width: 601px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
`;

export const FooterTitles = styled.h3`
  text-transform: uppercase;
  font-size: clamp(1rem, 8vw, 1.75rem);
  color: white;

  ${(props) =>
    props.color &&
    css`
      color: var(--secondary-color);
    `}
`;

const TextStyle = css`
  width: 80%;
  padding: 0.5rem 0;
`;

export const FormInput = styled.input`
  padding: 0.5rem 2rem;
  margin: 1rem 0 0.5rem;
`;

export const FormButton = styled.button`
  padding: 0.5rem 2rem;
  background-color: var(--secondary-color);
`;

export const FooterText = styled.p`
  ${TextStyle};
`;

export const FooterUl = styled.ul`
  list-style: none;

  ${(props) =>
    props.display &&
    css`
      display: flex;
      margin-top: 1rem;
    `}
`;

export const FooterLi = styled.li`
  ${TextStyle};
  border-bottom: 1px dotted #555;
`;

export const FooterLinks = styled(Link)`
  color: #999;

  ${(props) =>
    props.style &&
    css`
      color: #ffc400;
      margin-right: 0.5rem;
    `}
`;
