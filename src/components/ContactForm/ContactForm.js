import React from "react";
import { Form } from "react-bootstrap";

function ContactForm() {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Name </Form.Label>
        <Form.Control type="Name" placeholder="John Smith" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="JohnS@example.com" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
