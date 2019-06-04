import React, { Component } from "react";

import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends Component {
  render() {
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
              Giancarlo <br /> Vera
            </h1>
          </div>
          <div className="Badge__section-info">
            <h3>Frontend Developer</h3>
            <span>@gianvera</span>
          </div>
        </main>
        <footer className="Badge__footer">#platziconf</footer>
      </div>
    );
  }
}

export default Badge;
