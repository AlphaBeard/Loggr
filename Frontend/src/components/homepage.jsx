import React, { Component } from "react";
import Projects from "./projects";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { name: "tech", time: 100 },
        { name: "podiddy", time: 100 },
        { name: "Nam", time: 100 },
      ],
    };
  }
  render() {
    return (
      <div className="Homepage">
        <nav className="navbar navbar-light">
          <h1>Loggr</h1>
        </nav>
        <h1 className="title">PROJECTS</h1>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default Homepage;
