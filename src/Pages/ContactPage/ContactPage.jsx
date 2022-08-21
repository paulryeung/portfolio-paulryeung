import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";

function ContactPage(props) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eg9ujgh",
        "portfolio_contact",
        e.target,
        "ZcY8_EOTB_mBNzLue"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="ContactPage">
      <h1>Contact Me!</h1>
      <div className="form-div">
        <Form onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value="TestPaul"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value="ggthisworks@yahoo.ca"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              name="subject"
              value="testing emailjs"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Hi Paul!"
              name="message"
              value="we'd like to hire you because this works"
            />
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
