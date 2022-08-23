import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ConfirmationPage(props) {
  return (
    <div className="ConfirmationPage">
      <h2>Thank you for reaching out!</h2>
      <br />
      <p>
        I understand you are busy, however I will make every attempt to get back
        to you within the next 2 or 3 days. Until then, feel free to continue
        exploring the portfolio. Thank you again.
      </p>
      <br />
      <Link to="/home">
        <Button style={{ margin: "0 10px 0 10px" }} variant="primary">
          Go To Home
        </Button>
      </Link>
      <Link to="/works">
        <Button style={{ margin: "0 10px 0 10px" }} variant="primary">
          See Projects
        </Button>
      </Link>
      <Button
        style={{ margin: "0 10px 0 10px" }}
        variant="primary"
        onClick={props.emailAgain}
      >
        Email Again
      </Button>
    </div>
  );
}

export default ConfirmationPage;
