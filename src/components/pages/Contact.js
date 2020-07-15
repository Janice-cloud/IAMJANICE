import React from "react";
import { Button, Container } from "react-bootstrap";
import ContactForm from "../ContactForm/ContactForm";

function Contact() {
  return (
    <div>
      <Container>
        <h1>Contact Page</h1>
        <div className="row top-border"></div>
        <ContactForm></ContactForm>
        <Button variant="outline-primary">Submit</Button>{" "}
      </Container>
    </div>
  );
}

export default Contact;
