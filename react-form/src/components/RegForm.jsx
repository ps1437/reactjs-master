import React, { Component } from "react";

export default class RegForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addUser(this.userName.value, this.emailId.value);
    this.userName.value ='';
    this.emailId.value='';
  }

  updateHandler(event) {
    event.preventDefault();
    this.props.updateUserHandler(this.userName.value, this.emailId.value);
  }

  render() {
    const {user} = this.props;
    return (
      <div className="container form">
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              required
              defaultValue={user.username}
              className="form-control"
              ref={userName => (this.userName = userName)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email id:</label>
            <input
              type="text"
              name="email"
              required
              defaultValue={user.emailId }
              className="form-control"
              ref={emailId => (this.emailId = emailId)}
            />
          </div>

          <button type="submit" className="btn btn-default">
            Add
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.updateHandler}
          >
            Update
          </button>
        </form>
      </div>
    );
  }
}
