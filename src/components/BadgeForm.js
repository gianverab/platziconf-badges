import React, { Component } from "react";

class BadgeForm extends Component {
  render() {
    const { formValues, handleChange, handleClick, handleSubmit } = this.props;
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              name="firstName"
              value={formValues.firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="email"
              name="email"
              value={formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={formValues.twitter}
            />
          </div>

          <button onClick={handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
