import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./Components/counter.jsx";

ReactDom.render(<Counter />, document.getElementById("app"));
