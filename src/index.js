import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import "./global.css";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("app");
render(<App />, container);
