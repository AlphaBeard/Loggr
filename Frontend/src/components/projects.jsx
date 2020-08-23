import React, { Component } from "react";
import Project from './project'

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="projects">
      <button className="forward btn btn-lg"></button>
      <button className="backward btn btn-lg"></button>
        {this.props.projects.map((project) => {
          return <Project name={project.name} duration={project.time} />;
        })}
      </div>
    );
  }
}
