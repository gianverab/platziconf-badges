import React, { Component } from "react";

import "./styles/BadgesList.css";

class BadgesList extends Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.data.map(badge => (
            <li className="BadgesListItem" key={badge.id}>
              <img
                src={badge.avatarUrl}
                alt="avatar"
                className="BadgesListItem__avatar"
              />
              <div className="BadgesListItem__info">
                <h5>
                  {badge.firstName} {badge.lastName}
                </h5>
                <p className="BadgesListItem__twitter">@{badge.twitter}</p>
                <p>{badge.jobTitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
