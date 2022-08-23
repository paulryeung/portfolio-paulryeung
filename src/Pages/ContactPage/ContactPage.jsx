import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com";
import ConfirmationPage from "../ConfirmationPage/ConfirmationPage";

function ContactPage(props) {
  //set state for form variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //set state for which page to display
  const [showForm, setShowForm] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);

  //sending email form
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

    //e.target.reset();
    //show confirmation page instead, and switch off form
    setShowForm(false);
    setShowConfirm(true);
  }

  function emailAgain() {
    //reset all the form states
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");

    //reset form to be on and confirmation page off
    setShowForm(true);
    setShowConfirm(false);
  }

  return (
    <div className="ContactPage">
      {showForm && (
        <div className="form-div">
          <h1>Contact Me!</h1>
          <br />
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(evt) => setName(evt.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(evt) => setSubject(evt.target.value)}
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Hi Paul!"
                name="message"
                value={message}
                onChange={(evt) => setMessage(evt.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      )}

      {showConfirm && <ConfirmationPage emailAgain={emailAgain} />}
    </div>
  );
}

export default ContactPage;
