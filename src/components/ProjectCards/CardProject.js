import React from "react";
import { Card, Button, Row } from "react-bootstrap";



function CardProject(props) {
  return (
    <div>
    <Row style={{ marginTop: "3rem" }}></Row>  
    {
      <Card style={{ width: "18rem" }}>
        <Card.Img className="image" variant="top" src={props.card_image}></Card.Img>
        <Card.Body>
          <Card.Title>{props.card_title}</Card.Title>
          <Card.Text>
            {props.card_text}
          </Card.Text>
          <Button variant="primary" 
           href={props.link} target="_blank">{props.card_title}</Button>
        </Card.Body>
      </Card>
    }
    </div>
  );
}

export default CardProject;
