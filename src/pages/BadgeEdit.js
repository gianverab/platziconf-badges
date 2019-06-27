import React, { Component } from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import header from "../images/platziconf-logo.svg";
import api from "../api";
import "./styles/BadgeEdit.css";

class BadgeEdit extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
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

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const { form, loading, error } = this.state;

    if (loading === true) {
      return <PageLoading />;
    }

    if (error) {
      return <PageError />;
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img src={header} alt="Logo" className="BadgeEdit__hero-image" />
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
              <h1>Edit Attendant</h1>
              <BadgeForm
                handleChange={this.handleChange}
                handleClick={this.handleClick}
                handleSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
