import React, { Component } from "react";

import Gravatar from "./Gravatar";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends Component {
  render() {
    const { firstName, lastName, twitter, jobTitle, email } = this.props;
    return (
      <div className="Badge">
        <header className="Badge__header">
          <img src={confLogo} alt="Logo de PlatziConf" />
        </header>
        <main>
          <div className="Badge__section-name">
            <Gravatar className="Badge__avatar" email={email} />
            <h1>
              {firstName}
              <br />
              {lastName}
            </h1>
          </div>
          <div className="Badge__section-info">
            <h3>{jobTitle}</h3>
            <span>@{twitter}</span>
          </div>
        </main>
        <footer className="Badge__footer">#platziconf</footer>
      </div>
    );
  }
}

export default Badge;
