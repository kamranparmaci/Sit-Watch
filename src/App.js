import { Switch, Route } from "react-router-loading";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Movies from "./pages/movies/Movies";
import TvShows from "./pages/tv-shows/TVShows";
import Celebs from "./pages/celebs/Celebs";
import SearchPage from "./pages/search-page/SearchPage";
import styled from "styled-components";
import { Globaly } from "./components/GlobalVariable";

const Padding = styled.div`
  padding: 4rem 0;
`;

const App = () => {
  return (
    <>
      <Globaly />
      <Navbar />
      <Padding>
        <Switch maxLoadingTime="1000">
          <Route exact path="/" component={Home} loading />
          <Route path="/movies" component={Movies} loading />
          <Route path="/tv" component={TvShows} loading />
          <Route path="/person" component={Celebs} loading />
          <Route path="/search/:termId" component={SearchPage} loading />
        </Switch>
      </Padding>
      <Footer />
    </>
  );
};

export default App;
