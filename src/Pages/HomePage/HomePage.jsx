import React, { Component } from "react";

import { SocialIcon } from "react-social-icons";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function HomePage(props) {
  return (
    <div className="HomePage">
      <div className="profile-container">
        <div className="portrait">
          <img src={process.env.PUBLIC_URL + "/images/photo.jpg"} />
        </div>
        <div className="info">
          <div className="title">
            <h2>Paul Yeung</h2>
            <h3>Full Stack Developer</h3>
          </div>
          <p>
            Problem Solving, Efficiency, and Innovation! These are my 3 core
            pillars to building top quality software of the future. I love
            finding creative ways to solve unique problems alongside a mindset
            of furthering long-term visions and objectives. Together we can find
            ways to expand and scale your business, while seeking out untapped
            opportunities.
          </p>
          <Link to="/works">
            <Button style={{ margin: "0 10px 0 10px" }} variant="primary">
              See Projects!
            </Button>
          </Link>
          <div className="social-icons-div">
            <SocialIcon
              className="social-icon-btn"
              network="linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/paul-yeung-13088738/")
              }
            />
            <SocialIcon
              className="social-icon-btn"
              network="github"
              onClick={() => window.open("https://github.com/paulryeung")}
            />
            <Link to="/contact">
              <SocialIcon className="social-icon-btn" network="email" />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="note">
        <h3>
          Note to Viewers: You can push the bubbles with your mouse and spawn
          more by clicking!
        </h3>
      </div>
    </div>
  );
}

export default HomePage;
