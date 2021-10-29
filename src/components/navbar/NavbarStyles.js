import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: ${({ visibil }) => (visibil ? "-100px" : "0")};
  left: 0;
  height: 4rem;
  background-color: #000;
  width: 100%;
  padding: 0.75rem 0;
  z-index: 11;
  transition: all 0.3s ease-in-out;

  ul {
    display: flex;
    margin-left: auto;

    li {
      padding: 0.5rem;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        cursor: pointer;
        font-family: "Roboto Condensed", sans-serif;
        padding: 0 1rem;

        &:hover {
          color: var(--secondary-color);
        }
      }
    }

    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }

  h1 {
    color: #fff;
    font-family: "Montserrat", sans-serif;
    z-index: 999;
  }

  &.hide {
    top: -100px;
  }
  &.show {
    top: 0;
  }
`;

export const HamIcon = styled(FontAwesomeIcon)`
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;
    color: #fff;
    cursor: pointer;
    align-self: center;
    justify-self: end;
    font-size: 24px;
    margin-left: 10px;
    z-index: 2;
  }
`;

export const ResponsiveMenu = styled.div`
  display: none;

  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 60%;
    overflow: hidden;
    background: linear-gradient(
      90deg,
      rgba(9, 68, 129, 1) 6%,
      rgba(5, 40, 77, 0.97) 49%,
      rgba(5, 18, 31, 0.9) 86%
    );
    display: flex;
    justify-content: center;
    transform: translateX(
      ${({ showResponsiveMenu }) => (showResponsiveMenu ? "0" : "-200%")}
    );
    transition: all 0.5s ease-in-out;
    z-index: 12;
  }
`;

export const ResponsiveMenuWrapper = styled.div`
  align-self: center;
`;

export const FlexItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;

  @media only screen and (max-width: 768px) {
    display: flex;
    max-width: 100%;
  }
`;

export const ResponsiveMenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResponsiveTitle = styled.h3`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const ItemLink = styled(Link)`
  color: #f7f7f7;
  z-index: 3;
`;
