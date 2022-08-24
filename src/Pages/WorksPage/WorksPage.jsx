import React, { Component } from "react";
import CardTile from "../../Components/CardTile/CardTile";
const projects = require("../../projects.js");

function WorksPage(props) {
  return (
    <div className="HomePage">
      <div className="works-container">
        <h1>Projects</h1>

        <div className="cards-container">
          {projects.map((project) => (
            <CardTile
              name={project.name}
              description={project.description}
              status={project.status}
              photo={process.env.PUBLIC_URL + project.photo}
              link={project.link}
              technology={project.technology}
              howto={project.howto}
              authors={project.authors}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorksPage;
