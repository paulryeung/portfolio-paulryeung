import React, { Component } from "react";
import CardTile from "../../Components/CardTile/CardTile";
const projects = require("../../projects.js");

function HomePage(props) {
  return (
    <div className="HomePage">
      <div className="container">
        <div className="portrait">
          <img src={process.env.PUBLIC_URL + "/images/photo.jpg"} />
        </div>
        <div className="info"> </div>
      </div>
    </div>
  );
}

export default HomePage;
