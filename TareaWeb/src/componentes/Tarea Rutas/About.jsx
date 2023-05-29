import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './css/about.css'
import "bootstrap/dist/css/bootstrap.min.css";

function About({ color }) {
  return (
    <Container className="d-flex justify-content-center">
      <Card className={`about-me-card ${color}`} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./mi_foto.jpg" />
        <Card.Body>
          <Card.Title>Marco Antonio Sarango Guaman </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem ratione aliquid accusamus sunt neque, unde blanditiis, nostrum quam quia commodi numquam nisi eius pariatur qui beatae ad dicta cumque?
          </Card.Text>
          <Button variant="primary">Más información.</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default About;