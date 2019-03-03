import React, { Component } from "react";
import RegForm from "./components/form/RegForm";
import ListUser from "./components/list/ListUser";
import "./App.css";
import Toggle from "./components/slider/Toggle";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      toggle: true,
      editFlag: false,

      selectedUser: [{ username: "", emailId: "" }]
    };

    this.toggleListHandler = this.toggleListHandler.bind(this);
  }

  componentDidMount() {
    const list = [
      { username: "Praveen", emailId: "praveen123@gmail.com" },
      { username: "Soni", emailId: "soni123@gmail.com" },
      { username: "Ravi", emailId: "ravi123@gmail.com" }
    ];

    this.setState({ userList: list });
  }

  addUser = (uname, email) => {
    let uList = [...this.state.userList];
    uList.push({ username: uname, emailId: email });
    this.setState({ userList: uList });
  };

  deleteHandler = userIndex => {
    let modifyList = [...this.state.userList]; //copy
    modifyList.splice(userIndex, 1);
    this.setState({ userList: modifyList });
  };

  editHandler = userIndex => {
    const selectedUser = this.state.userList[userIndex];
    this.setState({ editFlag: true, selectedUser: selectedUser });
  };

  updateUserHandler = (uname, emailId) => {
    let userList = this.state.userList;
    userList = userList.map(user => {
      if (user.username === uname) {
        user.username = uname;
        user.emailId = emailId;
      }
      return user;
    });

    this.setState({
      editFlag: false,
      userList: userList,
      selectedUser: { username: "", emailId: "" }
    });
  };

  toggleListHandler() {
    const show = this.state.toggle;
    this.setState({ toggle: !show });
  }

  render() {
    const toggleStatus = this.state.toggle;
    let userList = null;
    if (toggleStatus) {
      userList = (
        <ListUser
          userList={this.state.userList}
          deleteHandler={this.deleteHandler}
          editHandler={this.editHandler}
        />
      );
    }
    return (
      <div className=" center_div container">
        <div className="app">
          {" "}
          <h1>
            Reactjs <b>CRUD</b> Application{" "}
          </h1>
        </div>
        <div className="row">
          <div className="panel panel-primary">
            <div className="panel-heading text-center">ADD USER</div>
            <div className="panel-body">
              <RegForm
                addUser={this.addUser}
                editFlag={this.state.editFlag}
                user={this.state.selectedUser}
                updateUserHandler={this.updateUserHandler}
              />
            </div>
          </div>
        </div>
        <div className="float-left">
          <Toggle
            toggleListHandler={this.toggleListHandler}
            toggle={this.state.toggle}
          />
        </div>
        {userList}
      </div>
    );
  }
}

export default App;
