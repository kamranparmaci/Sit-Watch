import { MediaA, MediaUl } from "./MediasStyles";

const Medias = ({ gender, facebook_id, instagram_id, twitter_id, imdb_id }) => {
  return (
    <>
      <MediaUl>
        {facebook_id === null ? null : (
          <li>
            <MediaA
              href={`https://www.facebook.com/${facebook_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </MediaA>
          </li>
        )}
        {instagram_id === null ? null : instagram_id === "" ? null : (
          <li>
            <MediaA
              href={`https://www.instagram.com/${instagram_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </MediaA>
          </li>
        )}
        {twitter_id === null ? null : (
          <li>
            <MediaA
              href={`https://www.twitter.com/${twitter_id}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </MediaA>
          </li>
        )}
        {imdb_id === null ? null : (
          <li>
            <MediaA
              href={`https://www.imdb.com/${
                gender ? `name` : `title`
              }/${imdb_id}/?ref_=nv_sr_srsg_0`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-imdb fa-2x"></i>
            </MediaA>
          </li>
        )}
      </MediaUl>
    </>
  );
};

export default Medias;
