import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function CardTile(props) {
  return (
    <div className="CardTile">
      <Card
        style={{ display: "in-line block", width: "300px", margin: "20px" }}
      >
        <Card.Img variant="top" src={props.photo} />
        <Card.Body style={{ height: "120px" }}>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Button variant="primary">{props.button}</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardTile;
