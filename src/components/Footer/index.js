import React from "react";
import "./style.css";
import { Row } from "react-bootstrap";


function Footer() {
  return (
    <div>
    <Row style={{ marginTop: "1rem" }}></Row>
    <footer className="footer sticky-bottom">
      <span>Janice Leung 2020</span>
    </footer>
    </div>
  );
}

export default Footer;
