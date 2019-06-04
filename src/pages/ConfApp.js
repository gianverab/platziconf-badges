import React, { Component } from "react";

import Badge from "../components/Badge";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/ConfApp.css";

class ConfApp extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="ConfApp__hero">
          <img src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfApp;
