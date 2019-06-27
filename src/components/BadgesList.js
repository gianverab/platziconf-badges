import React, { Component } from "react";
import { Link } from "react-router-dom";

import BadgesListItem from "../components/BadgesListItem";
import "./styles/BadgesList.css";

class BadgesList extends Component {
  render() {
    if (this.props.data.length === 0) {
      return (
        <React.Fragment>
          <h3>No badges were found</h3>
          <Link to="/badges/new" className="btn btn-primary">
            Create new badge
          </Link>
        </React.Fragment>
      );
    }
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.data.map(badge => (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}/edit`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
