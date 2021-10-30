import React from "react";
import {
  SearchContainer,
  CardContainer,
  CardImage,
  TextContainer,
  GridSearch,
  P,
} from "./SearchPageStyles";
import { useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import { IMG_API, SEARCH_API } from "../../constant";
import { useHistory } from "react-router-dom";
import { Meta, text_truncate } from "../../utils";
import _ from "lodash";

const SearchPage = () => {
  const { termId } = useParams();

  const history = useHistory();

  const results = useSearch(SEARCH_API, termId);

  return (
    <SearchContainer>
      <Meta title={termId} />
      <div className="container">
        <GridSearch>
          {results.map((result) => {
            const KnownFor = _.map(result.known_for, "original_title").join();
            return (
              <CardContainer
                key={result.id}
                onClick={() => {
                  if (result.media_type === "person") {
                    history.push(`/person/${result.id}`);
                  } else if (result.media_type === "tv") {
                    history.push(`/tv/${result.id}`);
                  } else {
                    history.push(`/movies/${result.id}`);
                  }
                }}
              >
                <CardImage
                  src={
                    result.profile_path === null
                      ? "../../img/user.png"
                      : result.media_type === "person"
                      ? IMG_API + result.profile_path
                      : result.poster_path
                      ? IMG_API + result.poster_path
                      : "../../img/movie.png"
                  }
                />
                <TextContainer>
                  <h4>
                    {result.original_title
                      ? result.original_title
                      : result.name
                      ? result.name
                      : result.original_name}
                  </h4>
                  <P>
                    {result.release_date
                      ? result.release_date
                      : result.first_air_date}
                  </P>
                  {result.overview && (
                    <P>{text_truncate(result.overview, 80, "...")}</P>
                  )}
                  {result.known_for && <P>{KnownFor}</P>}
                </TextContainer>
              </CardContainer>
            );
          })}
        </GridSearch>
      </div>
    </SearchContainer>
  );
};

export default SearchPage;
