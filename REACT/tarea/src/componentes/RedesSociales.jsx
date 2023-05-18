import React from 'react'
import fotoIES from "/headerIES.jpg";
import { FaFacebookSquare,FaInstagram } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";


export const RedesSociales = () => {
  return (
    <div>
        <p> Incluir imágenes externas </p>
        <img src="../public/vite.svg" alt="logo de VITE" />
        <a href="https://www.iescuravalera.es"><img src={fotoIES} alt="foto INSTITUTO CURA VALERA" /></a>


        <p> Incluir iconos externos </p>
       <FaFacebookSquare/> 
       <a href="https://www.instagram.com/"><FaInstagram/></a> <DiAndroid/>
    </div>
  )
}


//Caso de sacar un listado de redes sociales que se pasa como argumento con un array de objetos. Para no tener que ir de uno en uno.
export const RedesSociales2 = ({enlaces}) => {
  return (
    <>
      {enlaces.map((item,index) => <a href={item.url}><img src={item.imagen} /></a>)}
    </>
  )
}