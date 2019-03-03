import React, { Component } from "react";
import "./form.css";

export default class RegForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addUser(this.userName.value, this.emailId.value);
    this.userName.value = "";
    this.emailId.value = "";
  }

  updateHandler(event) {
    event.preventDefault();
    this.props.updateUserHandler(this.userName.value, this.emailId.value);
    document.getElementById("userForm").reset();
  }

  render() {
    const { user, editFlag } = this.props;
    let btn = null;
    console.log(user);
    if (editFlag) {
      btn = (
        <button
          type="button"
          className="btn btn-primary update centered"
          onClick={this.updateHandler}
        >
          UPDATE
        </button>
      );
    } else {
      btn = (
        <button type="submit" className="btn btn-primary  centered">
          ADD
        </button>
      );
    }
    return (
      <div className="col-md-4 col-md-offset-4">
        <form onSubmit={this.onSubmitHandler} id="userForm">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              required
              defaultValue={user.username}
              className="form-control"
              disabled={editFlag}
              autoComplete="off"
              placeholder="Enter your name"
              ref={userName => (this.userName = userName)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email id:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email Id"
              required
              defaultValue={user.emailId}
              autoComplete="off"
              className="form-control"
              ref={emailId => (this.emailId = emailId)}
            />
          </div>
          <div className="wrapper">{btn}</div>
        </form>
      </div>
    );
  }
}
