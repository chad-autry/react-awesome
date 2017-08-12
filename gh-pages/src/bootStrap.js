//This JS file simply bootstraps the app from the root component when the window loads
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import AppRoot from "./components/AppRoot.jsx";

//This function executes immediately
(function() {
  //This function is attached to execute when the window loads
  document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
      <Router basename="/react-awesome">
        <Route render={props => <AppRoot {...props} />} />
      </Router>,
      document.getElementById("app")
    );
  });
})();
