import React, { Component } from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/ConfApp.css";

class ConfApp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log("Button was clicked!");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { firstName, lastName, email, jobTitle, twitter } = this.state;
    return (
      <div>
        <Navbar />
        <div className="ConfApp__hero">
          <img src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge />
            </div>
            <div className="col-6">
              <BadgeForm
              handleChange={this.handleChange}
              handleClick={this.handleClick}
              handleSubmit={this.handleSubmit}
              firstName={firstName}
              lastName={lastName}
              email={email}
              jobTitle={jobTitle}
              twitter={twitter}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfApp;
