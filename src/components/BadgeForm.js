import React, { Component } from "react";

class BadgeForm extends Component {
  render() {
    const {
      firstName,
      lastName,
      email,
      jobTitle,
      twitter,
      handleChange,
      handleClick,
      handleSubmit
    } = this.props;
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
              value={firstName}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              name="lastName"
              value={lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="email"
              name="email"
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={twitter}
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
