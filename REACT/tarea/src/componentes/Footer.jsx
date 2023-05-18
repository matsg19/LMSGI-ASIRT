import React from 'react'
import './footer.css'
import {BsFacebook, BsTwitter} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="#"><BsFacebook/> </a>  
        <a href="#"><BsTwitter/> </a>
        <a href="http://iescuravalera.es"><BiWorld /> </a>
      </div>
    </footer>
  )
}