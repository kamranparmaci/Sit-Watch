import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useDetails from "../../hooks/useDetails";
import _ from "lodash";
import { IMG_API } from "../../constant";
import Medias from "../media/Medias";
import { Meta, text_truncate } from "../../utils";
import useWindowSize from "../../hooks/useWindowSize";
import {
  GridContainer,
  Aside,
  DetailPosterImage,
  PersonalInfoTitle,
  PersonalInfoSubTitle,
  PersonalInfoValue,
  PersonalInfoContainer,
  MainContainer,
  PersonName,
  BioContent,
  HorizontalContainer,
  ActingContainer,
  ActingUl,
  ActingLi,
  ActingDate,
  ActingLink,
  ActingCharacter,
  DetailH3,
  KnownForContainer,
  ImageKnownFor,
  GridContainerMob,
  DetailPosterImageMob,
  Header,
  PersonNameMob,
  ActingDateMob,
  ActingContainerMob,
  PersonalInfoSubTitleMob,
  PersonalInfoValueMob,
  ActingLiMob,
  ActingLinkMob,
  ReadMoreBTN,
  NoBioP,
} from "./PeopleStyles";
import { v4 as uuidv4 } from "uuid";

const PeopleDetails = ({ url }) => {
  let { personId } = useParams();
  const history = useHistory();
  const [credits, setCredits] = useState([]);
  const [textTrun, SetTextTrun] = useState(false);
  const [bioText, setBioText] = useState("");
  const { width } = useWindowSize();

  const person = useDetails(`${url}${personId}`);

  const renderedAlsoKnownAs = _.map(person.also_known_as, (aka) => {
    return aka && <p key={uuidv4()}>{aka}</p>;
  });

  useEffect(() => {
    const getCredites = () => {
      try {
        const credits = person.combined_credits.cast;
        setBioText(person.biography);
        setCredits(credits);
      } catch (error) {
        console.log(error);
      }
    };
    getCredites();
  });

  const renderedCasts = credits.map((movie, idx) => {
    const onclick = () => {
      history.push(movie.title ? `/movies/${movie.id}` : `/tv/${movie.id}`);
    };
    return (
      movie &&
      idx < 9 && (
        <div key={uuidv4()}>
          <Meta title={person.name} />
          <KnownForContainer onClick={onclick}>
            <ImageKnownFor
              src={
                movie.poster_path
                  ? IMG_API + movie.poster_path
                  : "../../img/movie.png"
              }
              alt={movie.title}
            />
            <span>
              {movie.title
                ? text_truncate(movie.title, 19, "...")
                : text_truncate(movie.name, 19, "...")}
            </span>
          </KnownForContainer>
        </div>
      )
    );
  });

  // Grouping movies and tv shows base on release date
  const group = _.groupBy(credits, (obj) => {
    try {
      const movieDate = obj.release_date
        ? obj.release_date.split("-")[0]
        : obj.first_air_date.split("-")[0];
      return movieDate;
    } catch (err) {
      console.log(err);
    }
  });

  // Sorting grouped movies and tv shows base on release date
  const sorted = _.orderBy(group, ["release_date"]);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {width <= 1024 && (
        <div className="container">
          <GridContainerMob>
            <DetailPosterImageMob
              src={
                person.profile_path
                  ? IMG_API + person.profile_path
                  : "../../img/user.png"
              }
              alt={person.name}
            />
            {/* Header */}
            <Header>
              <PersonNameMob>{person.name}</PersonNameMob>
              <Medias {...person.external_ids} gender={person.gender} />
              <PersonalInfoTitle>Personal Info</PersonalInfoTitle>
              <PersonalInfoContainer>
                <PersonalInfoSubTitleMob>Known For</PersonalInfoSubTitleMob>
                <PersonalInfoValueMob>
                  {person.known_for_department
                    ? person.known_for_department
                    : "_"}
                </PersonalInfoValueMob>
                <PersonalInfoSubTitleMob>Gender</PersonalInfoSubTitleMob>
                <PersonalInfoValueMob>
                  {person.gender === 1 ? "Female" : "Male"}
                </PersonalInfoValueMob>
                <PersonalInfoSubTitleMob>Date of Birth</PersonalInfoSubTitleMob>
                <PersonalInfoValueMob>
                  {person.birthday ? person.birthday : "_"}
                </PersonalInfoValueMob>
                <PersonalInfoSubTitleMob>
                  Place of Birth
                </PersonalInfoSubTitleMob>
                <PersonalInfoValueMob>
                  {person.place_of_birth ? person.place_of_birth : "_"}
                </PersonalInfoValueMob>
                {person.deathday && (
                  <>
                    <PersonalInfoSubTitleMob>
                      Day of Death
                    </PersonalInfoSubTitleMob>
                    <PersonalInfoValueMob>
                      {person.deathday}
                    </PersonalInfoValueMob>
                  </>
                )}
                <PersonalInfoSubTitleMob>Also Known As</PersonalInfoSubTitleMob>

                <PersonalInfoValueMob>
                  {renderedAlsoKnownAs}
                </PersonalInfoValueMob>
              </PersonalInfoContainer>
            </Header>
            {/* Main  */}

            <MainContainer>
              <DetailH3>Biography</DetailH3>
              {bioText ? (
                <ReadMoreBTN
                  onClick={() => {
                    if (textTrun) {
                      SetTextTrun(false);
                    } else {
                      SetTextTrun(true);
                    }
                  }}
                >
                  {textTrun ? "" : "Read More >>"}
                </ReadMoreBTN>
              ) : (
                <NoBioP>We don't have a biography for {person.name}.</NoBioP>
              )}

              {credits.length ? <DetailH3>Known For</DetailH3> : ""}
              <HorizontalContainer>{renderedCasts}</HorizontalContainer>
              {credits.length ? <DetailH3>Acting</DetailH3> : ""}
              <ActingContainerMob>
                {Object.keys(_.reverse(sorted)).map((keyName) => {
                  return (
                    <ActingUl key={uuidv4()}>
                      {_.reverse(sorted[keyName]).map((movie) => {
                        return (
                          <ActingLiMob key={uuidv4()}>
                            <ActingDateMob>
                              {movie.release_date
                                ? _.slice(movie.release_date, 0, 4)
                                : movie.first_air_date
                                ? _.slice(movie.first_air_date, 0, 4)
                                : "__"}
                            </ActingDateMob>
                            <ActingLinkMob
                              to={
                                movie.title
                                  ? `/movies/${movie.id}`
                                  : `/tv/${movie.id}`
                              }
                            >
                              {movie.title ? movie.title : movie.name}
                              {movie.character ? (
                                <ActingCharacter>
                                  as {movie.character}
                                </ActingCharacter>
                              ) : (
                                ""
                              )}
                            </ActingLinkMob>
                          </ActingLiMob>
                        );
                      })}
                    </ActingUl>
                  );
                })}
              </ActingContainerMob>
            </MainContainer>
          </GridContainerMob>
        </div>
      )}
      {width > 1024 && (
        <div className="container">
          <GridContainer>
            {/* Aside */}
            <Aside>
              <DetailPosterImage
                src={
                  person.profile_path
                    ? IMG_API + person.profile_path
                    : "../../img/user.png"
                }
              />
              <Medias {...person.external_ids} gender={person.gender} />
              <PersonalInfoTitle>Personal Info</PersonalInfoTitle>
              <PersonalInfoContainer>
                <PersonalInfoSubTitle>Known For</PersonalInfoSubTitle>
                <PersonalInfoValue>
                  {person.known_for_department
                    ? person.known_for_department
                    : "_"}
                </PersonalInfoValue>
                <PersonalInfoSubTitle>Gender</PersonalInfoSubTitle>
                <PersonalInfoValue>
                  {person.gender === 1 ? "Female" : "Male"}
                </PersonalInfoValue>
                <PersonalInfoSubTitle>Date of Birth</PersonalInfoSubTitle>
                <PersonalInfoValue>
                  {person.birthday ? person.birthday : "_"}
                </PersonalInfoValue>
                <PersonalInfoSubTitle>Place of Birth</PersonalInfoSubTitle>
                <PersonalInfoValue>
                  {person.place_of_birth ? person.place_of_birth : "_"}
                </PersonalInfoValue>
                {person.deathday && (
                  <>
                    <PersonalInfoSubTitle>Day of Death</PersonalInfoSubTitle>
                    <PersonalInfoValue>{person.deathday}</PersonalInfoValue>
                  </>
                )}
                <PersonalInfoSubTitle>Also Known As</PersonalInfoSubTitle>
                <PersonalInfoValue>{renderedAlsoKnownAs}</PersonalInfoValue>
              </PersonalInfoContainer>
            </Aside>
            {/* Main  */}
            <MainContainer>
              <PersonName>{person.name}</PersonName>
              <DetailH3>Biography</DetailH3>
              {textTrun === false ? (
                <>
                  <BioContent>{text_truncate(bioText, 700, "...")}</BioContent>
                </>
              ) : (
                <BioContent>{bioText}</BioContent>
              )}
              {bioText ? (
                <ReadMoreBTN
                  onClick={() => {
                    if (textTrun) {
                      SetTextTrun(false);
                    } else {
                      SetTextTrun(true);
                    }
                  }}
                >
                  {textTrun ? "" : "Read More >>"}
                </ReadMoreBTN>
              ) : (
                <NoBioP>We don't have a biography for {person.name}.</NoBioP>
              )}

              {credits.length ? <DetailH3>Known For</DetailH3> : ""}
              <HorizontalContainer>{renderedCasts}</HorizontalContainer>
              {credits.length ? <DetailH3>Acting</DetailH3> : ""}
              <ActingContainer>
                {Object.keys(_.reverse(sorted)).map((keyName) => {
                  return (
                    <ActingUl key={uuidv4()}>
                      {_.reverse(sorted[keyName]).map((movie) => {
                        return (
                          <ActingLi key={uuidv4()}>
                            <ActingDate>
                              {movie.release_date
                                ? _.slice(movie.release_date, 0, 4)
                                : movie.first_air_date
                                ? _.slice(movie.first_air_date, 0, 4)
                                : "_"}
                            </ActingDate>
                            <ActingLink
                              to={
                                movie.title
                                  ? `/movies/${movie.id}`
                                  : `/tv/${movie.id}`
                              }
                            >
                              {movie.title ? movie.title : movie.name}
                              {movie.character ? (
                                <ActingCharacter>
                                  as {movie.character}
                                </ActingCharacter>
                              ) : (
                                ""
                              )}
                            </ActingLink>
                          </ActingLi>
                        );
                      })}
                    </ActingUl>
                  );
                })}
              </ActingContainer>
            </MainContainer>
          </GridContainer>
        </div>
      )}
    </div>
  );
};

export default PeopleDetails;
