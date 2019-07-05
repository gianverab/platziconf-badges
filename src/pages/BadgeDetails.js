import React from "react";
import { Link } from "react-router-dom";

import Badge from "../components/Badge";
import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

const BadgeDetails = ({ data }) => (
  <React.Fragment>
    <div className="BadgeDetails__hero">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={confLogo} alt="Logo de la conferencia" />
          </div>
          <div className="BadgeDetails__hero-attendant-name col-6">
            <h1>
              {data.firstName} {data.lastName}
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Badge
            firstName={data.firstName}
            lastName={data.lastName}
            email={data.email}
            twitter={data.twitter}
            jobTitle={data.jobTitle}
          />
        </div>
        <div className="col-6">
          <h2>Actions</h2>
          <React.Fragment>
            <div>
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${data.id}/edit`}
              >
                Edit
              </Link>
            </div>
            <div>
              <button className="btn btn-danger">Delete</button>
            </div>
          </React.Fragment>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default BadgeDetails;
