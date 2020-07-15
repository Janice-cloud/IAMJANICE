import React from "react";
import { Container, Col, Image } from "react-bootstrap";
import HeroImage from "../HeroImage/HeroImage";

function Home() {
  return (
      <Container style={{ minHeight: "80%" }}>
        <Col sm={8}>
              <HeroImage></HeroImage>
              <h1 className="display-3 font-weight-bold text-Dark">JANICE</h1>
              <p className="lead text-Dark font-weight-bold">Bringing ideas to life!</p>  
        </Col>
      </Container>
  );
}

export default Home;
