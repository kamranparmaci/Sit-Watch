import styled from "styled-components";

export const SearchContainer = styled.div`
  display: ${({ displays }) => (displays ? "none" : "block")};
  align-self: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 4.2rem;
  background: #fff;
  border-bottom: 1px solid #333;
  transform: translateY(
    ${({ showSearch }) => (showSearch ? "100px" : "-100px")}
  );

  animation: ${({ displays }) =>
    displays
      ? "widthAnim1 0.4s ease-in-out forwards"
      : "widthAnim2 0.4s ease-in-out forwards"};
  transition: all 0.4s ease-in-out;

  @keyframes widthAnim1 {
    0% {
      transform: translateY(-200px);
    }
    100% {
      transform: translateY(102px);
    }
  }
`;

export const MagWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: ${({ displays }) => (displays ? 0 : 1)};
  cursor: pointer;
`;

export const SearchIcon = styled.i`
  color: #fff;
  font-size: 1rem;
  align-self: center;
  z-index: 10;
`;

export const SearchResults = styled.div`
  display: ${({ displays }) => (displays ? "block" : "none")}!important;
  flex-direction: column;
  position: absolute;
  left: 8%;
  top: 4.2rem;
  width: 84%;
  height: 500px;
  background-color: #555;
  border-radius: 0 0 5px 5px;
  overflow: auto;
  z-index: 100;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 1024px) {
    left: 4%;
    width: 92%;
  }
`;

export const SearchItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  position: relative;
  width: 100%;
  height: auto;

  &:last-child {
    border: none;
  }

  &:nth-child(1),
  &:nth-child(2) {
    background: url("${({ image }) => image}") no-repeat center top / cover;
    height: 85%;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: #333;
  }
`;

export const InnerSearchItem = styled.div`
  border-bottom: 1px solid #ccc;
  width: 100%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  z-index: 2;
`;

export const SearchItemImage = styled.img`
  width: 100px;
  height: 150px;
  padding: 0.5rem;
  border: 5px solid #555;
`;

export const SearchItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2rem;
  color: #fff;

  h6 {
    margin: 0.5rem 1rem;
    font-size: 0.75rem;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    background: #fff;
    padding: 0.5rem;
    cursor: pointer;

    i {
      color: #555;
      z-index: 999;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  border: none;
  font-size: 16px;
  background-color: white;
  padding: 10px;
  height: 4rem;
  outline: none;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 85%;
    margin-left: 2%;
  }
`;
