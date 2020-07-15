import React from "react";
import { Container, Col } from "react-bootstrap";

function Home() {
  return (
      <Container style={{ minHeight: "80%" }}>
        <Col sm={8}>
              <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
              <p className="lead text-Dark font-weight-bold">Bringing ideas to life!</p>  
        </Col>
      </Container>
  );
}

export default Home;
