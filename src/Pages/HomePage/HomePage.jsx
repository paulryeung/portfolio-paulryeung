import React, { Component } from "react";
import CardTile from "../../Components/CardTile/CardTile";
import { SocialIcon } from "react-social-icons";
const projects = require("../../projects.js");

function HomePage(props) {
  return (
    <div className="HomePage">
      <div className="Container">
        <div className="profile-container">
          <div className="portrait">
            <img src={process.env.PUBLIC_URL + "/images/photo.jpg"} />
          </div>
          <div className="info">
            <div className="title">
              <h2>Paul Richard Yeung</h2>
              <h3>Full Stack Developer</h3>
            </div>
            <p>
              Problem Solving, Efficiency, and Innovation! These are my 3 core
              pillars to building top quality software of the future. I love
              finding creative ways to solve unique problems alongside a mindset
              of furthering long-term visions and objectives. Together we can
              find ways to expand and scale your business, while seeking out
              untapped opportunities.
            </p>
            <div className="social-icons">
              <SocialIcon
                className="social-icon-btn"
                network="linkedin"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/paul-yeung-13088738/"
                  )
                }
              />
              <SocialIcon
                className="social-icon-btn"
                network="github"
                onClick={() => window.open("https://github.com/paulryeung")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
