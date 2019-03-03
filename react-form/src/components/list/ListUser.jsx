import React, { Component } from "react";
import "./userlist.css"

export default class ListUser extends Component {
  render() {
    const userList = this.props.userList.map((user, index) => (
      <tbody>
        <tr key={index}>
          <td>{user.username}</td>
          <td>{user.emailId}</td>
          <td>
            <i
              className="glyphicon glyphicon-edit edit"
              tooltip='Edit'
              onClick={() => this.props.editHandler(index)}
            />
          </td>
          <td>
            <i
              tooltip='Delete'
              className="glyphicon glyphicon-trash delete"
              
              onClick={() => this.props.deleteHandler(index)}
            />
          </td>
        </tr>
      </tbody>
    ));

    return (
      <div className="table-responsive text-center">
        <table className="table table-striped table-bordered text-center ">
          <thead className="header">
            <tr>
              <th>NAME</th>
              <th>EMAIL ID</th>

              <th colSpan="2">Operations</th>
            </tr>
          </thead>

          {userList}
        </table>
      </div>
    );
  }
}
