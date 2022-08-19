import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function CardTile(props) {
  return (
    <div className="CardTile">
      <Card
        className="shadow-lg p-3 mb-5 bg-white rounded"
        style={{ display: "in-line block", width: "320px", margin: "20px" }}
      >
        <Card.Img variant="top" src={props.photo} style={{ height: "180px" }} />
        <Card.Body style={{ height: "140px" }}>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <a href={props.link}>
            <Button style={{ margin: "0 10px 0 10px" }} variant="primary">
              Visit Site!
            </Button>
          </a>
          <Button style={{ margin: "0 10px 0 10px" }} variant="primary">
            Details
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardTile;
