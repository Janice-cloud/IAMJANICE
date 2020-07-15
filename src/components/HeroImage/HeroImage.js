import React from "react";
import { Col, Container, Image } from "react-bootstrap";

function HeroImage() {
  return (
      <Container style={{ minHeight: "80%" }}>
        <Col sm={8}>
              <Image src="https://github.com/Janice-cloud/IAMJANICE/blob/master/Images/IMG_5796.JPG"></Image>
        </Col>
      </Container>
  );
}

export default HeroImage;