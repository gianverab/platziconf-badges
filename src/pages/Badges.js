import React, { Component } from "react";
import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import confLogo from "../images/badge-header.svg";
import api from "../api";
import "./styles/Badges.css";

class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="logo" className="Badges_conf-logo" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList data={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
