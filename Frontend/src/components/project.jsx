import React, { Component } from "react";

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);

    return (
      <div className="project">
        <h1 className="title">{this.props.name}</h1>
        <h2>{this.props.duration}</h2>
        <button className="btn btn-lg btn-success"> Start</button>
      </div>
    );
  }
}
