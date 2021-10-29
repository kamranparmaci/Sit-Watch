import { Route, useRouteMatch, Switch } from "react-router";

import GridPage from "../../components/grid-page-container/GridPage";
import { CELEBS_POPULAR_API } from "../../constant";
import PeopleDetails from "../../components/people-details/PeopleDetails";

const PERSON_DETAIL_API = "person/";

const Celebs = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${path}/popular`}>
          <GridPage url={CELEBS_POPULAR_API} title="Popular People" people />
        </Route>
        <Route exact path={`${path}/:personId`}>
          <PeopleDetails url={PERSON_DETAIL_API} />
        </Route>
      </Switch>
    </>
  );
};

export default Celebs;
