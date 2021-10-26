import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function QuoteModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="textarea" placeholder="Phone Number" />
              <Form.Label>Service</Form.Label>
              <Form.Control
                type="tel"
                placeholder="What Service are you Interested in?"
              />
              <Form.Text className="text-muted">
                We will give you a call within the next 24 hours
              </Form.Text>
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
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
