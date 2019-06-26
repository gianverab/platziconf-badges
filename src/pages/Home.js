import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import heroImg from "../images/astronauts.svg";
import infoImg from "../images/platziconf-logo.svg";

const Home = () => (
  <div className="Home__hero">
    <div className="Home__info">
      <img src={infoImg} alt="info header" className="Home__info-img" />
      <h1>Print your badges</h1>
      <p>The easiest way to manage your conference</p>
      <Link to="/badges" className="btn btn-primary Home__info-btn">
        Start now
      </Link>
    </div>
    <img src={heroImg} alt="hero" className="Home__img" />
  </div>
);

export default Home;
