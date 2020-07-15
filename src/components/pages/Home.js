import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (

    <Row>
      <Container>
        <Col sm={8}>
              <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
              <p className="lead text-Dark font-weight-bold">Bringing ideas to life!</p>  
        </Col>
      </Container>
    </Row>
  
  );
}

export default Home;
