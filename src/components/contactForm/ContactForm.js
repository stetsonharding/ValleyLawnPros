import React from "react";
import { Button, Form } from "react-bootstrap";

import "./ContactForm.scss";

export default function ContactForm() {
  return (
    <div className="contact-form-container">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Your Name" />
          <Form.Label></Form.Label>
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            placeholder="We're here for you questions, concerns, and to talk about your ideas!"
            rows={8}
          />
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
