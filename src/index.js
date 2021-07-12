import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "bootstrap/scss/bootstrap.scss";
//import "bootstrap/dist/css/bootstrap.min.css";
//import $ from "jquery";
//import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Sections from "./context/sectionContext";

import App from "./views/home";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Sections>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  </Sections>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
