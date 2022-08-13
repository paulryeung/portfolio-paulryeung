import React, { Component } from "react";
import CardTile from "../../Components/CardTile/CardTile";
const projects = require("../../projects.js");

function HomePage(props) {
  return (
    <div className="HomePage">
      <div className="Container">
        <h1>Welcome to Paul Yeung's Portfolio!</h1>

        <div className="cards-container">
          {projects.map((project) => (
            <CardTile
              name={project.name}
              description={projects.description}
              photo={process.env.PUBLIC_URL + project.photo}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
