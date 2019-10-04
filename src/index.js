import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import AppCounters from "./appCounters";
import AppMovies from "./appMovies";

ReactDom.render(<AppMovies />, document.getElementById("app"));
