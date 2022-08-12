import React, { Component } from "react";
import CardTile from "../../Components/CardTile/CardTile";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage(props) {
  let projects = [
    {
      name: "Kirby Minesweeper",
      description:
        "Help Kirby clear bombs so he can resume his life of feasting.",
      photo: "/images/kirby_square.jpg",
      link: "",
    },
    {
      name: "Avengers Initiative",
      description:
        "Tour the Avengers compound for top secret profiles and missions of your favorite heroes!",
      photo: "/images/avengers.jpg",
      link: "",
    },
    {
      name: "Garden-Smart",
      description:
        "Build and show off your garden of vegetables! And how much money you spent.",
      photo: "/images/avengers.jpg",
      link: "",
    },
  ];

  return (
    <div className="HomePage">
      <div className="Container">
        <h1>Welcome to Paul Yeung's Portfolio!</h1>
        <h3>Please make yourself at home and explore!</h3>
        <div className="cards-container">
          <CardTile
            name={projects[0].name}
            description={projects[0].description}
            photo={projects[0].photo}
          />
          <CardTile
            name={projects[1].name}
            description={projects[1].description}
            photo={projects[1].photo}
          />

          <CardTile
            name={projects[2].name}
            description={projects[2].description}
            photo={projects[2].photo}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
