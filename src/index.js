import React from "react";
import { render } from "react-dom";

import ConfApp from "./pages/ConfApp";
import "./global.css";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("app");
render(<ConfApp />, container);
