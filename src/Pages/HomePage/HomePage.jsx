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
      link: "https://paulryeung.github.io/Kirby-Minesweeper/",
      button: "Help Kirby Now!",
    },
    {
      name: "Avengers Initiative",
      description:
        "Tour the Avengers compound for top secret profiles and missions of your favorite heroes!",
      photo: "/images/avengers.jpg",
      link: "https://avengers-initiative.herokuapp.com/",
      button: "Check It Out!",
    },
    {
      name: "Garden-Smart",
      description:
        "Add and show off your garden of vegetables! Waste money on different inputs!",
      photo: "/images/vegetables.jpg",
      link: "",
      button: "Start Planting!",
    },
  ];

  return (
    <div className="HomePage">
      <div className="Container">
        <h1>Welcome to Paul Yeung's Portfolio!</h1>

        <div className="cards-container">
          <CardTile
            name={projects[0].name}
            description={projects[0].description}
            photo={projects[0].photo}
            link={projects[0].link}
          />
          <CardTile
            name={projects[1].name}
            description={projects[1].description}
            photo={projects[1].photo}
            link={projects[1].link}
          />

          <CardTile
            name={projects[2].name}
            description={projects[2].description}
            photo={projects[2].photo}
            link={projects[2].link}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
