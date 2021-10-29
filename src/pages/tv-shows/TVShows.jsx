import { Route, useRouteMatch, Switch } from "react-router";

import MovieDetails from "../../components/movie-details/MovieDetails";
import GridPage from "../../components/grid-page-container/GridPage";
import {
  TV_POPULAR_API,
  TV_TOP_API,
  TV_ON_AIR_API,
  TV_AIR_TODAY_API,
  TV_DETAIL_API,
} from "../../constant";

const TvShows = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/tv-popular`}>
          <GridPage url={TV_POPULAR_API} title="Popular Tv" />
        </Route>
        <Route exact path={`${path}/tv-top-rated`}>
          <GridPage url={TV_TOP_API} title="Top Rated Tv" />
        </Route>
        <Route exact path={`${path}/tv-on-air`}>
          <GridPage url={TV_ON_AIR_API} title="On Air Tv" />
        </Route>
        <Route exact path={`${path}/tv-airing-today`}>
          <GridPage url={TV_AIR_TODAY_API} title="Airing Today Tv" />
        </Route>

        <Route exact path={`${path}/:movieId`}>
          <MovieDetails url={TV_DETAIL_API} />
        </Route>
      </Switch>
    </>
  );
};

export default TvShows;
