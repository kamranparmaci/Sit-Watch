import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "../src/components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
