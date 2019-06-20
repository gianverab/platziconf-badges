import React, { Component } from "react";

import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends Component {
  render() {
    const { formValues } = this.props;
    return (
      <div className="Badge">
        <header className="Badge__header">
          <img src={confLogo} alt="Logo de PlatziConf" />
        </header>
        <main>
          <div className="Badge__section-name">
            <img
              src="https://es.gravatar.com/userimage/20613212/c631ba00ee3705235a86ceef28850f9f.jpg?size=200"
              alt="Avatar"
              className="Badge__avatar"
            />
            <h1>
              {formValues.firstName}
              <br />
              {formValues.lastName}
            </h1>
          </div>
          <div className="Badge__section-info">
            <h3>{formValues.jobTitle}</h3>
            <span>@{formValues.twitter}</span>
          </div>
        </main>
        <footer className="Badge__footer">#platziconf</footer>
      </div>
    );
  }
}

export default Badge;
