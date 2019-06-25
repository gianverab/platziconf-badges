import React, { Component } from "react";

import Navbar from "../components/Navbar";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";

class Badges extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="logo" className="Badges_conf-logo" />
            </div>
          </div>
        </div>
        <div className="Badge__container">
          <div className="Badges_buttons">
            <a href="/badges/new" className="btn btn-primary">
              New badge container
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Badges;
