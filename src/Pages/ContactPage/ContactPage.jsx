import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactPage(props) {
  return (
    <div className="ContactPage">
      <h1>Contact Me!</h1>
      <div className="form-div">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Hi Paul!" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ContactPage;
