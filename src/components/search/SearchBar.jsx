import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";
import { IMG_API, SEARCH_API } from "../../constant";
import useSearch from "../../hooks/useSearch";
import {
  Input,
  SearchContainer,
  SearchResults,
  MagWrapper,
  SearchItem,
  SearchIcon,
  Form,
  InputWrapper,
  InnerSearchItem,
  SearchItemImage,
  SearchItemTextContainer,
} from "./SearchBarStyles";

const SearchBar = forwardRef((props, refChild) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const history = useHistory();
  const search = useSearch(SEARCH_API, term);

  // Passing tow functions to child
  useImperativeHandle(refChild, () => ({
    handleShowSearchFromParent(show = !props.show) {
      setShowSearch(show);
      return showSearch;
    },
    searchBarState() {
      return showSearch;
    },
  }));

  useEffect(() => {
    try {
      if (term === "" || term === null || term === undefined) {
        setResults([]);
      } else {
        if (search.length > 0) {
          setResults(search);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [search, term]);

  return (
    <>
      <MagWrapper
        displays={showSearch}
        onClick={() => {
          setShowSearch(true);
          props.setShow(true);
        }}
      >
        <SearchIcon className="fas fa-search"></SearchIcon>
      </MagWrapper>

      <SearchContainer showSearch={showSearch}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            setShowSearch(false);
            history.push(`/search/${term}`);
          }}
        >
          <div className="container">
            <InputWrapper>
              <Input
                type="text"
                placeholder="Search for a movie, tv show, person ..."
                onChange={(e) => setTerm(e.target.value)}
                value={term}
                displays={showSearch}
              />
              <span
                onClick={() => {
                  setShowSearch(false);
                  props.setShow(false);
                }}
              >
                <i className="fas fa-times"></i>
              </span>
            </InputWrapper>
          </div>
        </Form>

        {results.length > 0 && (
          <SearchResults displays={showSearch}>
            {results.map((sr) => {
              const KnownFor = _.map(sr.known_for, (knFor) => {
                return knFor;
              });
              return (
                <SearchItem
                  key={sr.id}
                  image={
                    KnownFor[0]
                      ? IMG_API + KnownFor[0].backdrop_path
                      : IMG_API + sr.backdrop_path
                  }
                >
                  <InnerSearchItem
                    onClick={() => {
                      setShowSearch(false);
                      if (sr.media_type === "person") {
                        history.push(`/person/${sr.id}`);
                      } else if (sr.media_type === "tv") {
                        history.push(`/tv/${sr.id}`);
                      } else {
                        history.push(`/movies/${sr.id}`);
                      }
                    }}
                  >
                    <SearchItemImage
                      src={
                        sr.profile_path === null
                          ? "../../img/user.png"
                          : sr.media_type === "person"
                          ? IMG_API + sr.profile_path
                          : sr.poster_path
                          ? IMG_API + sr.poster_path
                          : "../../img/movie.png"
                      }
                      alt={sr.original_title}
                    />
                    <SearchItemTextContainer>
                      <h4>
                        {sr.original_title
                          ? sr.original_title
                          : sr.name
                          ? sr.name
                          : sr.original_name}
                      </h4>
                      <h6>
                        {sr.media_type === "person" && sr.gender === 1
                          ? "Actress"
                          : sr.media_type === "person" && sr.gender === 2
                          ? "Actor"
                          : sr.release_date}
                      </h6>
                      <p>{sr.overview}</p>
                    </SearchItemTextContainer>
                  </InnerSearchItem>
                </SearchItem>
              );
            })}
          </SearchResults>
        )}
      </SearchContainer>
    </>
  );
});

export default SearchBar;
