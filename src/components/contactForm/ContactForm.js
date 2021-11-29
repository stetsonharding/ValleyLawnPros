import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "emailjs-com";

import "./ContactForm.scss";

export default function ContactForm() {
  const [contactNotification, setContactNotification] = useState("");

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
          setContactNotification("Message sent.");
        },
        (error) => {
          setContactNotification(
            "Error sending your message, please try again."
          );
        }
      );

    e.target.reset();
  }

  return (
    <div className="contact-form-container">
      <Form onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="firstName"
            placeholder="Name"
            required
          />

          <Form.Control
            className="mt-3"
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            name="service"
            as="textarea"
            placeholder="We're here for you questions, concerns, and to talk about your ideas!"
            rows={8}
          />
          <Form.Text className="text-muted">
            <p style={{ color: "#fff" }}>
              We will give you a call within the next 24 hours
            </p>
            <p style={{ color: "#fff" }}>{contactNotification}</p>
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="contact-us-button p-1 m-2"
        >
          Send
        </Button>
      </Form>
    </div>
  );
}
