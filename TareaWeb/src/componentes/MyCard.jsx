import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/mycard.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MyCard({ imagen, titulo, color }) {
  return (
    <Card className={`${color} mx-2`} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} style={{ height: '200px' }} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text className="white-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, laudantium sit eos ab porro corporis qui quo fuga. Pariatur earum, aliquam error doloremque debitis praesentium nostrum. Quae temporibus ducimus nam!
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MyCard;