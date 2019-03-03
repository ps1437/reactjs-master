import React, { Component } from "react";
import RegForm from "./components/RegForm";
import ListUser from "./components/ListUser";
import "./App.css";

class AppLocalStorage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userList: [],
      showList: true,
      selectedUser: [{ username: "", emailId: "" }]
    };

    this.toggleListHandler = this.toggleListHandler.bind(this);
    this.addUser = this.addUser.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.updateUserHandler = this.updateUserHandler.bind(this);
  }
  addUser(uname, email) {
    let uList = [...this.state.userList];
    uList.push({ username: uname, emailId: email });
    this.setState({ userList: uList });
  }

  deleteHandler = userIndex => {
    let modifyList = [...this.state.userList];
    
    modifyList.splice(userIndex,1);

    // let filerList = modifyList.filter(user =>{
    //   return user.name != name;
    // })

    // this.setState({ userList: filerList });
    this.setState({ userList: modifyList });
  };

  editHandler = userIndex => {
    const selectedUser = this.state.userList[userIndex];
    console.log(selectedUser.emailId+"-----------"+selectedUser.username);
    this.setState({ selectedUser: selectedUser });
  };


  
  
  updateUserHandler = (uname, emailId) => {
    let userList = this.state.userList;
 
    userList = userList.map((user) => {
      console.log(uname +"------------"+user.username)
      if (user.username === uname) {
            console.log('heree');
            user.username = uname;
            console.log('heree');
           user.emailId = emailId;
      }
      return user;
    });

    this.setState({ userList: userList });
  };
  componentDidMount() {
    const list = [
      { username: "Praveen", emailId: "praveen123@gmail.com" },
      { username: "Soni", emailId: "soni123@gmail.com" },
      { username: "Ravi", emailId: "ravi123@gmail.com" }
    ];

    this.setState({ userList: list });
  }

  toggleListHandler() {
    const show = this.state.showList;
    this.setState({ showList: !show });
  }

  render() {
    return (
      <div className="container jumbotron">
        <div className="card">
          <div className="card-body">
            <RegForm
              addUser={this.addUser}
              user={this.state.selectedUser}
              updateUserHandler={this.updateUserHandler}
            />
            <div className="text-center">
              <ListUser
                toggleListHandler={this.toggleListHandler}
                showList={this.state.showList}
                userList={this.state.userList}
                deleteHandler={this.deleteHandler}
                editHandler={this.editHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppLocalStorage;
