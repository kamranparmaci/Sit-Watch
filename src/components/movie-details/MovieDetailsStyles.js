import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const BackgroundMovieDetails = styled.div`
  background-color: ${(props) => props.color};
`;

export const BackdropPathImage = styled.div`
  position: relative;
  background: url(${(props) => props.image}) no-repeat 200px top / cover;
  width: 100%;
  height: 75vh;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: ${(props) => props.color};
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      ${(props) => props.color} 20%,
      rgba(3, 3, 3, 0.5) 30%,
      rgba(3, 3, 3, 0.7) 100%
    );
  }
`;

export const BackdropPathImageMob = styled.div`
  background: url(${(props) => props.image}) no-repeat center top / cover;
  width: 100%;
  height: 30%;
`;

export const OverlayHeaderContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  z-index: 10;
`;

export const OverlayHeaderContentMob = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

export const HeaderContainerMob = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 30%;
  padding: 1rem 0;
`;

export const PosterContainer = styled.div`
  flex: 1;
`;

export const DetailPosterImage = styled.img`
  width: 310px;
  height: 500px;
  border-radius: 15px;
`;

export const PosterImagesMob = styled.img`
  width: 25%;
  height: auto;
  border-radius: 5px;
  align-self: center;
`;

export const HeaderDetailContainer = styled.div`
  flex: 3;
  margin-left: 2rem;
  color: #f1f1f1;
`;

export const HeaderDetailContainerMob = styled.div`
  display: flex;
  flex-direction: column;
  color: #f1f1f1;
  padding-top: 1rem;
`;

export const DetailH1 = styled.h1`
  font-size: clamp(1.75rem, 7vw, 2.5rem);
  font-weight: bold;
`;

export const DetailH1Mob = styled.h1`
  font-size: clamp(2rem, 7vw, 3.5rem);

  @media screen and (max-width: 767px) {
    font-size: clamp(1.25rem, 7vw, 2.5rem);
  }
`;

export const DetailH3 = styled.h3`
  font-size: clamp(0.75rem, 7vw, 1.5rem);

  ${(props) =>
    props.margin &&
    css`
      margin: 1rem 0 0.5rem;
    `}
`;

export const DetailH3Mob = styled.h3`
  font-size: clamp(0.75rem, 7vw, 1.5rem);
`;

export const GenreAndDateContainerMob = styled.div`
  width: 100%;
  background-color: ${(props) => props.color};
  text-align: center;
`;

export const GenreAndDateContentMob = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f1f1f1;
  padding: 0.75rem 0;
`;

export const Genre = styled(Link)`
  padding: 0 0.25rem;
  color: #e51937;
`;

export const PlayerIcon = styled.i`
  font-size: 0.75rem;
  padding: 0 0.5rem 0 1.5rem;
`;

export const PlayButton = styled.a`
  color: #f1f1f1;
`;

export const RenderedTrailerContainerMob = styled.div`
  text-align: center;
  padding: 0.75rem 0;
`;

export const PlayerIconMob = styled.i`
  font-size: 0.75rem;
  padding-right: 0.75rem;
`;

export const MovieDetailBodyContainer = styled.div`
  background-color: white;
  padding: 2.5rem 0;

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const MovieDetailBodyContent = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DetailBodyLeft = styled.div`
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

export const DetailBodyAside = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1.75rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const TextAsideContainer = styled.div`
  margin: 1rem 0;

  @media screen and (max-width: 768px) {
    margin: 0.75rem 0;
  }
`;

export const MediasContainer = styled.div`
  padding-bottom: 0.75rem;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  overflow: auto hidden;
  margin: 1rem 0;
`;

export const FullCastCrew = styled(Link)`
  color: #000;

  &:hover {
    color: royalblue;
  }
`;

export const TabTitle = styled.span`
  font-size: 1rem;
  margin: 0 2rem;
  cursor: pointer;
  background: transparent;
`;

export const CrewContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 1.5rem 0 0;
`;

export const CrewContent = styled.div`
  margin: 0 1.5rem 1.5rem 0;
`;

export const RecommendationContainer = styled.div`
  width: 250px;
  height: 180px;
  margin: 0 1rem 1rem 0;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(0.97);
  }
`;

export const ImageRecommendation = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 5px;
  cursor: pointer;
`;

export const TitleRecommendation = styled.span`
  cursor: pointer;
`;

export const NetworksLogo = styled.img`
  width: auto;
  height: 35px;
  margin-top: 0.6rem;
`;

export const KeywordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto auto);

  @media screen and (max-width: 767px) {
    padding-top: 0.5rem;
    grid-template-columns: auto auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-top: 0.5rem;
    display: flex;
  }
`;

export const Keywordscontent = styled.div`
  margin: 0.25rem 0.25rem 0.25rem 0;

  @media screen and (max-width: 767px) {
    margin: 0.25rem 0 0 0;
  }
`;

export const KeywordsName = styled.span`
  background-color: #e0e0ff;
  padding: 0.25rem;
  border-radius: 5px;
  width: 100%;
  justify-self: center;

  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
