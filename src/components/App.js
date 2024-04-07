import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [projects, setProjects] = useState([
    { name: "Project 1", description: "Description of Project 1" },
    { name: "Project 2", description: "Description of Project 2" }
  ]);

  return (
    <div id="main">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;
