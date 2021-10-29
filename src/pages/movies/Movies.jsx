import { useRouteMatch, Route, Switch } from "react-router-dom";

import MovieDetails from "../../components/movie-details/MovieDetails";
import GridPage from "../../components/grid-page-container/GridPage";

import {
  POPULAR_API,
  TOP_API,
  NOW_PLATING_API,
  UPCOMING_API,
  MOVIE_DETAIL_API,
} from "../../constant";

const Movies = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/popular`}>
          <GridPage url={POPULAR_API} title="Popular Movies" />
        </Route>
        <Route exact path={`${path}/top-rated`}>
          <GridPage url={TOP_API} title="Top Rated Movies" />
        </Route>
        <Route exact path={`${path}/now-playing`}>
          <GridPage url={NOW_PLATING_API} title="Now Playing Movies" />
        </Route>
        <Route exact path={`${path}/upcoming`}>
          <GridPage url={UPCOMING_API} title="Upcoming Movies" />
        </Route>

        <Route exact path={`${path}/:movieId`}>
          <MovieDetails url={MOVIE_DETAIL_API} />
        </Route>
      </Switch>
    </>
  );
};

export default Movies;
