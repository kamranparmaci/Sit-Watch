import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr;
  padding: 2rem 0;
  min-height: 100%;
`;

export const GridContainerMob = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
`;

// main
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  overflow: hidden;
`;

export const PersonName = styled.h2`
  color: #000;
  font-size: clamp(0.75rem, 7vw, 2.5rem);
  font-weight: bolder;
  margin-bottom: 1rem;
`;

export const PersonNameMob = styled.h2`
  color: #000;
  font-size: clamp(2rem, 7vw, 3rem);
  font-weight: bolder;
  text-align: center;
  letter-spacing: 1.5px;
  justify-self: center;
  align-self: center;
  margin-bottom: 1rem;
`;

export const DetailH3 = styled.h3`
  text-align: left;
  font-size: clamp(0.75rem, 7vw, 1.5rem);
  color: #000;
  margin-bottom: 1rem;
`;

export const BioContent = styled.p`
  color: #333;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ReadMoreBTN = styled.button`
  background: transparent;
  border: none;
  margin-bottom: 1.25rem;
  font-size: 1rem;
  color: royalblue;
  cursor: pointer;
`;

export const NoBioP = styled.p`
  margin: -1.5rem 0 1rem 0;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  overflow: auto hidden;
  margin-bottom: 1.5rem;
  width: 100%;
`;

export const KnownForContainer = styled.div`
  width: 140px;
  height: 250px;
  margin: 0 0.75rem 1.5rem 0;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(0.97);
  }
  span {
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ImageKnownFor = styled.img`
  width: 140px;
  height: 210px;
  border-radius: 5px;
`;

export const ActingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  width: 100%;
  border: 0.1rem solid #aaa;
  border-radius: 5px;
`;

export const ActingContainerMob = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  width: 100%;
`;

export const ActingUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid #aaa;
  &:last-child {
    border-bottom: none;
  }
`;
export const ActingLi = styled.li`
  padding: 0.5rem 1rem;
  color: #000;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

export const ActingLiMob = styled.li`
  padding: 0.5rem 1rem;
  color: #000;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 5fr;
`;

export const ActingDate = styled.span`
  margin-right: 50px;
  justify-self: flex-start;
`;

export const ActingDateMob = styled.span`
  justify-self: flex-start;
  flex: 1;
`;

export const ActingLink = styled(Link)`
  font-weight: bold;
  padding: 0 0.25rem;
  color: #000;

  &:hover {
    color: royalblue;
  }
`;

export const ActingLinkMob = styled(Link)`
  font-weight: bold;
  padding: 0 0.25rem;
  color: #000;
  flex: 5;

  &:hover {
    color: royalblue;
  }
`;

export const ActingCharacter = styled.span`
  margin-left: 0.5rem;
  color: #555;
`;

// aside
export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-right: 1rem;
  min-height: 100%;
`;

// header
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const DetailPosterImage = styled.img`
  width: 310px;
  height: 500px;
  margin-bottom: 3rem;
  border-radius: 5px;
  object-fit: cover;
`;

export const DetailPosterImageMob = styled.img`
  display: block;
  width: 40%;
  margin: 0 auto 2rem;
  border-radius: 5px;
  object-fit: cover;
  object-position: center top;
`;

export const PersonalInfoTitle = styled.h2`
  color: #000;
  font-size: 1.5rem;
  margin: 1rem 0;
`;
export const PersonalInfoSubTitleMob = styled.h2`
  color: #000;
  font-size: 1rem;
`;

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonalInfoSubTitle = styled.h3`
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;
export const PersonalInfoValue = styled.h4`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const PersonalInfoValueMob = styled.h4`
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;
