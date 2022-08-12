import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";

function CardTile(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="/images/kirby_square.jpg" />
      <Card.Body>
        <Card.Title>Kirby MineSweeper</Card.Title>
        <Card.Text>
          Help Kirby clear the bombs so he can resume his life of eating.
        </Card.Text>
        <Button variant="primary">Check It Out!</Button>
      </Card.Body>
    </Card>
  );
}

export default CardTile;
