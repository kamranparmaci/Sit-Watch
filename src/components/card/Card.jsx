import { IMG_API } from "../../constant";
import { CardContainer, CardImage, TextContainer, P, H5 } from "./CardStyles";
import _ from "lodash";
import { text_truncate } from "../../utils";

const Card = ({
  cardInfo,
  width,
  height,
  margin,
  peopleSize,
  movieAndTvSize,
}) => {
  const KnownFor = text_truncate(
    _.map(cardInfo.known_for, "original_title").join(),
    20,
    "..."
  );

  // checking whether if data is person or movie And tv to passing proper sizing props to styled component
  return cardInfo.release_date || cardInfo.first_air_date ? (
    <CardContainer
      width={width}
      height={height}
      margin={margin}
      movieAndTvSize={movieAndTvSize}
    >
      <CardImage
        movieAndTvSize={movieAndTvSize}
        width={width}
        height={height}
        src={
          cardInfo.poster_path
            ? IMG_API + cardInfo.poster_path
            : cardInfo.profile_path
            ? IMG_API + cardInfo.profile_path
            : cardInfo.poster_path === null
            ? "../../img/movie.png"
            : cardInfo.profile_path === null
            ? "../../img/user.png"
            : ""
        }
        alt={cardInfo.name ? cardInfo.name : cardInfo.title}
      />
      <TextContainer movieAndTvSize={movieAndTvSize}>
        <h4>{cardInfo.name ? cardInfo.name : cardInfo.title}</h4>

        <P movieAndTvSize={movieAndTvSize}>
          {cardInfo.character
            ? cardInfo.character
            : cardInfo.release_date
            ? cardInfo.release_date
            : cardInfo.first_air_date
            ? cardInfo.first_air_date
            : _.forIn(KnownFor, (value, key) => {
                return value;
              })}
        </P>
        {cardInfo.overview && (
          <H5 movieAndTvSize={movieAndTvSize}>
            {text_truncate(cardInfo.overview, 70, "...")}
          </H5>
        )}
      </TextContainer>
    </CardContainer>
  ) : (
    <CardContainer
      width={width}
      height={height}
      margin={margin}
      peopleSize={peopleSize}
    >
      <CardImage
        peopleSize={peopleSize}
        width={width}
        height={height}
        src={
          cardInfo.poster_path
            ? IMG_API + cardInfo.poster_path
            : cardInfo.profile_path
            ? IMG_API + cardInfo.profile_path
            : cardInfo.poster_path === null
            ? "../../img/movie.png"
            : cardInfo.profile_path === null
            ? "../../img/user.png"
            : ""
        }
        alt={cardInfo.name ? cardInfo.name : cardInfo.title}
      />
      <TextContainer peopleSize={peopleSize}>
        <h4>{cardInfo.name ? cardInfo.name : cardInfo.title}</h4>

        <P peopleSize={peopleSize}>
          {cardInfo.character
            ? cardInfo.character
            : cardInfo.release_date
            ? cardInfo.release_date
            : cardInfo.first_air_date
            ? cardInfo.first_air_date
            : _.forIn(KnownFor, (value, key) => {
                return value;
              })}
        </P>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
