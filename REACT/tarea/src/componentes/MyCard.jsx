import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './mycard.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({color}) {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/vite.svg" />
      <Card.Body className={color}>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;