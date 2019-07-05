import React, { Component } from "react";

import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import BadgeDetails from "./BadgeDetails";

class BadgeDetailsContainer extends Component {
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
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <PageLoading />;
    }

    if (error) {
      return <PageError error={error} />;
    }

    return <BadgeDetails data={data} />;
  }
}

export default BadgeDetailsContainer;
