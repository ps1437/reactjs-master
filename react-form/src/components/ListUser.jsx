import React, { Component } from "react";

export default class ListUser extends Component {
 

  render() {
    const userList = this.props.userList.map((user, index) => (
      <tbody>
        <tr key={index}>
          <td>{user.username}</td>
          <td>{user.emailId}</td>
          <td>
            <i className="glyphicon glyphicon-edit" onClick={() => this.props.editHandler(index)} />
          </td>
          <td>
            <i
              className="glyphicon glyphicon-trash"
              onClick={() => this.props.deleteHandler(index)}
            />
          </td>
        </tr>
      </tbody>
    ));

    let showFlag = null;
    const showHideFlag = this.props.showList;
    if (showHideFlag) {
      showFlag = (
        <div className="table-responsive text-center">
          <table className="table table-striped table-bordered ">
            {userList}
          </table>
        </div>
      );
    }
    return (
      <div>
        <label className="switch">
          <input
            type="checkbox"
            checked={showHideFlag}
            onChange={this.props.toggleListHandler}
          />
          <span className="slider round" />
        </label>

        {showFlag}
      </div>
    );
  }
}
