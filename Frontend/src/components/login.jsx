import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameError: true,
      passwordError: true,
    };

    this.login = this.login.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  render() {
    let userClasses = "invalid",
      passClasses = "invalid";
    if (!this.state.usernameError) userClasses = "valid";
    if (!this.state.passwordError) passClasses = "valid";
    return (
      <div className="Homepage">
        <form id="login" onSubmit={this.login}>
          <h1 style={{ textAlign: "center" }}>Logger</h1>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Username</label>
            <div className="col-sm-9">
              <input id="username" className={"form-control " + userClasses} value={this.state.username} onChange={this.handleUsernameChange}></input>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input
                id="password"
                className={"form-control " + passClasses}
                type="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              ></input>
            </div>
          </div>
          <div className="row justify-content-center">
            <button className="btn btn-lg btn-success">Login</button>
          </div>
        </form>
      </div>
    );
  }
  login(event) {
    event.preventDefault();
    if (this.state.usernameError || this.state.passwordError) {
      console.log("Invalid login info!");
      return;
    }
    this.props.doLogin(this.state.username, this.state.password);
  }
  handlePasswordChange(event) {
    if(event.target.value.length > 12) return;
    this.setState({ password: event.target.value }, () => {
      if (this.state.password !== "") this.setState({ passwordError: false });
      else this.setState({ passwordError: true });
    });
  }
  handleUsernameChange(event) {
    if(event.target.value.length > 12) return;
    this.setState({ username: event.target.value }, () => {
      if (this.state.username !== "") this.setState({ usernameError: false });
      else this.setState({ usernameError: true });
    });
  }
}

export default Login;
