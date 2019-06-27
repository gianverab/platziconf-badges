import React, { Component } from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";

class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
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
    const { form } = this.state;
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={header} alt="Logo" className="BadgeNew__hero-image" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={form.firstName || "FIRST_NAME"}
                lastName={form.lastName || "LAST_NAME"}
                twitter={form.twitter || "twitter"}
                jobTitle={form.jobTitle || "JOB_TITLE"}
                email={form.email || "EMAIL"}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                handleSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
