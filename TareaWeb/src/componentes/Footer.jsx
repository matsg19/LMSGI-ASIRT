import React from 'react'
import './css/footer.css'
import {BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

export const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.facebook.com/antoni.sg.127/" target='_blank'><BsFacebook/> </a>  
        <a href="https://twitter.com/MatSg99" target='_blank'><BsTwitter/> </a>
        <a href="https://www.instagram.com/mc_sg19/" target='_blank'><BsInstagram/></a>
        <a href="https://www.google.com/maps/place/C.+Jacinto+Anglada,+04620+Vera,+Almer%C3%ADa/@37.2494565,-1.8706111,20.92z/data=!4m15!1m8!3m7!1s0xd7ad502a456607b:0x30cbdf0101911eb0!2sC.+Jacinto+Anglada,+04620+Vera,+Almer%C3%ADa!3b1!8m2!3d37.2494698!4d-1.8704311!16s%2Fg%2F11xcxy4gp!3m5!1s0xd7ad502a456607b:0x30cbdf0101911eb0!8m2!3d37.2494698!4d-1.8704311!16s%2Fg%2F11xcxy4gp" target='_blank'><BiWorld /> </a>
      </div>
    </footer>
  )
}