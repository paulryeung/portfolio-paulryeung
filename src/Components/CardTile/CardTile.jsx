import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function CardTile(props) {
  //modal setup, show state, and handling close or show
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button
            style={{ margin: "0 10px 0 10px" }}
            variant="primary"
            onClick={() => {
              window.open(props.link);
            }}
          >
            Visit Site!
          </Button>

          <Button
            style={{ margin: "0 10px 0 10px" }}
            variant="primary"
            onClick={handleShow}
          >
            Details
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        scrollable={true}
        animation={true}
        centered={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-div">
            <h3>Technology Stack</h3>
            <p>{props.technology}</p>

            <h3>How To Use</h3>
            <p>{props.howto}</p>

            <h3>Authors/Contributors (Github)</h3>
            <ul>
              {props.authors.map((author, i) => (
                <li key={i}>{author}</li>
              ))}
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CardTile;
