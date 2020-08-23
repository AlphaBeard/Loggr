import React, { Component } from "react";
import Login from "./components/login";
import Homepage from "./components/homepage";
import "./build/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: false, username: null };
    this.doLogin = this.doLogin.bind(this);
  }
  render() {
    if (this.state.loggedIn === true) {
      return (
        <React.Fragment>
          <Login doLogin={this.doLogin}></Login>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Homepage></Homepage>
        </React.Fragment>
      );
    }
  }
  async doLogin(username, password) {
    let res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    console.log(response);
    if (!response.success) {
      alert(response.msg);
    } else {
      this.setState({ loggedIn: true, username: response.username });
    }
  }
  logout() {}
  isLoggedIn() {}
}
export default App;
