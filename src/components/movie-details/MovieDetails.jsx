import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import _ from "lodash";
import $ from "jquery";
import { v4 as uuidv4 } from "uuid";

import useDetails from "../../hooks/useDetails";
import Modal from "../modal/Modal";
import Medias from "../media/Medias";
import TabPanel from "../tabs/TabPanel";
import Card from "../card/Card";
import { IMG_API } from "../../constant";
import useWindowSize from "../../hooks/useWindowSize";

import {
  DetailPosterImage,
  BackdropPathImage,
  OverlayHeaderContent,
  PosterContainer,
  HeaderDetailContainer,
  HeaderContainerMob,
  DetailH1,
  DetailH3,
  Genre,
  PlayButton,
  MovieDetailBodyContainer,
  MovieDetailBodyContent,
  DetailBodyLeft,
  DetailBodyAside,
  HorizontalContainer,
  FullCastCrew,
  TextAsideContainer,
  PlayerIcon,
  CrewContent,
  RecommendationContainer,
  ImageRecommendation,
  TitleRecommendation,
  Keywordscontent,
  KeywordsName,
  CrewContainer,
  KeywordContainer,
  BackdropPathImageMob,
  OverlayHeaderContentMob,
  HeaderDetailContainerMob,
  PosterImagesMob,
  RenderedTrailerContainerMob,
  PlayerIconMob,
  DetailH1Mob,
  DetailH3Mob,
  GenreAndDateContainerMob,
  GenreAndDateContentMob,
  MediasContainer,
  BackgroundMovieDetails,
  NetworksLogo,
} from "./MovieDetailsStyles";
import { Meta, text_truncate } from "../../utils";
import { usePalette } from "react-palette";

const MovieDetails = ({ url }) => {
  const [show, setShow] = useState(false);
  const { width } = useWindowSize();

  let { movieId } = useParams();
  const history = useHistory();

  const movie = useDetails(`${url}${movieId}`);

  const {
    backdrop_path,
    poster_path,
    title,
    name,
    release_date,
    first_air_date,
    overview,
    runtime,
    episode_run_time,
    genres,
    status,
    spoken_languages,
    budget,
    type,
    networks,
    revenue,
    videos,
    credits,
    recommendations,
    external_ids,
    keywords,
  } = movie;

  // Get data from usePalette hook(react-palette library) and get the color from it
  const { data } = usePalette(IMG_API + poster_path);

  // Get the release dates for movies and tv shows and proper them for ui
  const movie_date = _.slice(release_date, 0, 4);
  const tv_date = _.slice(first_air_date, 0, 4);
  const episodRunTime = _.slice(episode_run_time, 0, 1);
  let time = runtime ? runtime : episodRunTime;
  let hours = Math.floor(time / 60);
  let minutes = time % 60;

  // Get the genres name and link them into own relevant page
  const genre = _.map(genres, "name");
  const renderedGenres = genre.map((g) => {
    return (
      g !== null && (
        <Genre key={uuidv4()} to={`/search/${g}`}>
          {g}
        </Genre>
      )
    );
  });

  // This function show the modal
  const showModal = () => {
    setShow(true);
  };

  // This function kill the modal and video
  const hideModal = () => {
    setShow(false);
    history.push(`${movieId}`);

    $("iframe").attr("src", $("iframe").attr("src"));
  };

  // get the keyword for youtube trailers and display them into Modal
  const keys = _.map(videos, (values) => {
    return values.map((value) => value.key);
  });
  const renderedTrailer = keys.map((key) => {
    return (
      key.length !== 0 && (
        <span key={uuidv4()}>
          <Modal k={key[0]} show={show} handleModal={hideModal} />
          <PlayButton href={`#play=${key[0]}`} onClick={showModal}>
            {width <= 1024 && (
              <PlayerIconMob className="fas fa-play"></PlayerIconMob>
            )}
            {width > 1024 && <PlayerIcon className="fas fa-play"></PlayerIcon>}
            Play Trailer
          </PlayButton>
        </span>
      )
    );
  });

  // Get the limited list of crew
  const crews = _.map(credits, (value) => {
    return value.map((crew) => {
      return crew.job === "Characters" ||
        crew.job === "Screenplay" ||
        crew.job === "Story" ||
        crew.job === "Director" ||
        crew.job === "Creator" ||
        crew.known_for_department === "Creator" ? (
        <CrewContent key={uuidv4()}>
          <h4>{crew.name}</h4>
          <span>{crew.job}</span>
        </CrewContent>
      ) : (
        ""
      );
    });
  });

  // Get the limited list of cast
  const casts = _.map(credits, function (value) {
    return value.map((cast, idx) => {
      const onclick = () => {
        history.push(`/person/${cast.id}`);
      };
      return (cast && cast.order < 9) || (cast.order > 9 && idx < 9) ? (
        <div key={uuidv4()} onClick={onclick}>
          <Card width={145} height={260} cardInfo={cast} margin />
        </div>
      ) : null;
    });
  });

  // Get the recommendations for movies and tv shows and display them
  const recommendation = _.get(recommendations, "results");
  const renderedRecommendation = _.map(recommendation, (re, idx) => {
    const onclick = () => {
      history.push(re.title ? `/movies/${re.id}` : `/tv/${re.id}`);
    };
    return (
      re !== null &&
      idx < 15 && (
        <RecommendationContainer key={uuidv4()}>
          <ImageRecommendation
            onClick={onclick}
            src={
              re.backdrop_path
                ? IMG_API + re.backdrop_path
                : "../../img/movie.png"
            }
            alt={re.title ? re.title : re.name}
          />
          <TitleRecommendation>
            {re.title
              ? text_truncate(re.title, 38, "...")
              : text_truncate(re.name, 38, "...")}
          </TitleRecommendation>
        </RecommendationContainer>
      )
    );
  });

  // Get the languages
  const englishName = _.map(spoken_languages, "english_name");

  // get the broadcaster network of movie or tv show
  const network = _.map(networks, "logo_path");

  // Get the keywords and display them
  const keywordResults = _.get(keywords, "results")
    ? _.get(keywords, "results")
    : _.get(keywords, "keywords");
  const keyword = _.map(keywordResults, "name");
  const renderedKeywords = keyword.map((keyw, idx) => {
    return (
      idx < 10 && (
        <Keywordscontent key={uuidv4()}>
          <KeywordsName>{keyw}</KeywordsName>
        </Keywordscontent>
      )
    );
  });

  return (
    <BackgroundMovieDetails color={data.darkVibrant}>
      <Meta title={title} />
      {width <= 1024 && (
        <>
          <BackdropPathImageMob
            image={IMG_API + backdrop_path}
            color={data.darkVibrant}
          >
            <div className="container">
              <HeaderContainerMob>
                <PosterImagesMob
                  src={
                    poster_path ? IMG_API + poster_path : "../../img/movie.png"
                  }
                />
              </HeaderContainerMob>
            </div>
          </BackdropPathImageMob>
          <OverlayHeaderContentMob color={data.darkVibrant}>
            <div className="container">
              <HeaderDetailContainerMob>
                <DetailH1Mob>{title ? title : name} </DetailH1Mob>
                <RenderedTrailerContainerMob>
                  {renderedTrailer}
                </RenderedTrailerContainerMob>
              </HeaderDetailContainerMob>
            </div>
            <GenreAndDateContainerMob>
              <div className="container">
                <GenreAndDateContentMob>
                  <div>
                    <span>{release_date ? release_date : first_air_date} </span>
                    <span>. </span>
                    {hours ? <span>{`${hours}h `}</span> : ""}
                    <span>{minutes ? <span>{`${minutes}m`}</span> : ""}</span>
                  </div>
                  <div>{renderedGenres}</div>
                </GenreAndDateContentMob>
              </div>
            </GenreAndDateContainerMob>
            <div className="container">
              <HeaderDetailContainerMob>
                <DetailH3Mob>Overview</DetailH3Mob>
                <p>{overview}</p>
                <CrewContainer>{crews}</CrewContainer>
              </HeaderDetailContainerMob>
            </div>
          </OverlayHeaderContentMob>
        </>
      )}
      {width > 1024 && (
        <>
          <BackdropPathImage
            color={data.darkVibrant}
            image={IMG_API + backdrop_path}
          >
            <div className="container">
              <OverlayHeaderContent>
                <PosterContainer>
                  <DetailPosterImage
                    src={
                      poster_path
                        ? IMG_API + poster_path
                        : "../../img/movie.png"
                    }
                  />
                </PosterContainer>
                <HeaderDetailContainer>
                  <DetailH1>{title ? title : name} </DetailH1>
                  <span>{release_date ? movie_date : tv_date} </span>
                  {renderedGenres} {hours ? <span>{`${hours}h `}</span> : ""}
                  <span>{minutes ? <span>{`${minutes}m`}</span> : ""}</span>
                  {renderedTrailer}
                  <DetailH3 margin>Overview</DetailH3>
                  <p>{overview}</p>
                  <CrewContainer>{crews}</CrewContainer>
                </HeaderDetailContainer>
              </OverlayHeaderContent>
            </div>
          </BackdropPathImage>
        </>
      )}
      <MovieDetailBodyContainer>
        <div className="container">
          <MovieDetailBodyContent>
            <DetailBodyLeft>
              {title ? (
                <DetailH3>Top Billed Cast</DetailH3>
              ) : (
                <DetailH3>Sries Cast</DetailH3>
              )}
              <HorizontalContainer>{casts}</HorizontalContainer>
              <FullCastCrew to="/">Full Cast & Crew</FullCastCrew>
              <hr style={{ margin: "2rem 0" }} />
              <TabPanel props={movie} keys={keys} />
              {_.map(recommendation, (re, idx) => {
                return (
                  re !== null &&
                  idx === 0 && (
                    <div key={uuidv4()}>
                      <hr style={{ margin: "2rem 0" }} />
                      <DetailH3>Recommendations</DetailH3>
                    </div>
                  )
                );
              })}

              <HorizontalContainer>
                {renderedRecommendation}
              </HorizontalContainer>
            </DetailBodyLeft>
            <DetailBodyAside>
              <MediasContainer>
                <Medias {...external_ids} />
              </MediasContainer>
              <TextAsideContainer>
                <h4>Status</h4>
                <span>{status}</span>
              </TextAsideContainer>
              <TextAsideContainer>
                <h4>Original Language</h4>
                <span>{englishName}</span>
              </TextAsideContainer>
              <TextAsideContainer>
                {budget === 0 || budget ? (
                  <h4>Budget</h4>
                ) : type ? (
                  <h4>Type</h4>
                ) : (
                  ""
                )}
                {budget ? (
                  <span>${budget}</span>
                ) : type ? (
                  <span>{type}</span>
                ) : (
                  "__"
                )}
              </TextAsideContainer>
              <TextAsideContainer>
                {networks ? <h4>Network</h4> : <h4>Revenue</h4>}
                {revenue ? (
                  <span>${revenue}</span>
                ) : networks ? (
                  <NetworksLogo src={IMG_API + network} />
                ) : (
                  "__"
                )}
              </TextAsideContainer>
              <TextAsideContainer>
                <h4>Keywords</h4>
                {keyword.length ? (
                  <KeywordContainer>{renderedKeywords}</KeywordContainer>
                ) : (
                  <p>No keywords have been added.</p>
                )}
              </TextAsideContainer>
            </DetailBodyAside>
          </MovieDetailBodyContent>
        </div>
      </MovieDetailBodyContainer>
    </BackgroundMovieDetails>
  );
};

export default MovieDetails;
