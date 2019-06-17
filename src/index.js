import React from "react";
import ReactDOM from "react-dom";
// import { HashRouter as Router } from "react-router-dom";
import Main from "./Main";

const location = document.querySelector("#root");
console.log(location);
ReactDOM.render(<Main />, location);
