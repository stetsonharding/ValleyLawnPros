import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

function QuoteModal() {
  const [show, setShow] = useState(false);
  const [messageNotification, setMessageNotification] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mtdoe3h",
        "template_wymkhcx",
        e.target,
        "user_OcADP2ZtNbUvQnfGd1atQ"
      )
      .then(
        (result) => {
          setMessageNotification("Message sent.");
        },
        (error) => {
          setMessageNotification(
            "Error sending your message, please try again."
          );
        }
      );

    e.target.reset();
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Request a Free Quote Today
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Get a Free Estimate!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                required
              />
              <Form.Label>Service</Form.Label>
              <Form.Control
                name="service"
                type="text"
                placeholder="What Service are you Interested in?"
              />
              <Form.Text className="text-muted">
                We will give you a call within the next 24 hours
              </Form.Text>
              <br />
              <br />
              <Form.Text className="text-muted">
                <strong>
                  Prefer to email? Reach us at thevalleylawnpros@gmail.com
                </strong>
              </Form.Text>
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        {messageNotification}
        <Modal.Footer>
          <Button variant="" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default QuoteModal;
