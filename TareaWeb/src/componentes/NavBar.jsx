import React from 'react';
import './css/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaBuilding, FaEnvelope, FaHome, FaLock, FaServicestack } from "react-icons/fa";
import { BsFillHouseCheckFill, BsFillWrenchAdjustableCircleFill, BsHouseFill, BsNewspaper } from "react-icons/bs";
import { FcContacts } from "react-icons/fc";
import { AiFillBuild, AiFillContacts, AiFillCustomerService, AiOutlineContacts, AiOutlineInfoCircle, AiOutlineShop } from "react-icons/ai";

export const NavBar = () => {
  return (
    <nav>
      <Navbar bg="warning" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home"> <p className="icono"><BsHouseFill /></p> <p className="texto">Home</p></Nav.Link>
            <Nav.Link href="#features"> <p className="icono"><FaBuilding /></p> <p className="texto">Company</p></Nav.Link>
            <Nav.Link href="#pricing"> <p className="icono"><BsFillWrenchAdjustableCircleFill /></p> <p className="texto">Services</p></Nav.Link>
            <Nav.Link href="#pricing"><p className="icono"><AiOutlineShop /></p> <p className="texto">Showcase</p></Nav.Link>
            <Nav.Link href="#pricing"><p className="icono"><AiFillCustomerService /></p> <p className="texto">Support</p></Nav.Link>
            <Nav.Link href="#pricing"><p className="icono"><FaLock /></p> <p className="texto">Privacy</p></Nav.Link>
            <Nav.Link href="#pricing"><p className="icono"><FaEnvelope /></p> <p className="texto">Contact</p></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
};