import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Gravatar from "../components/Gravatar";
import "./styles/BadgesListItem.css";

const BadgesListItem = ({ badge }) => (
  <div className="BadgesListItem">
    <Gravatar email={badge.email} className="BadgesListItem__avatar" />
    <div className="BadgesListItem__info">
      <h5>
        {badge.firstName} {badge.lastName}
      </h5>
      <p className="BadgesListItem__twitter">
        <FontAwesomeIcon icon={faTwitter} />@{badge.twitter}
      </p>
      <p>{badge.jobTitle}</p>
    </div>
  </div>
);

export default BadgesListItem;
