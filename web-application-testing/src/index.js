import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Display from "./Display";
import * as serviceWorker from "./serviceWorker";
import "./fonts/digital-7.ttf";

ReactDOM.render(<Display />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
