import React from 'react'
// import { logo } from '/logo.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter  } from "react-icons/fa";
export const RedesSociales = () => {
  return (
    <div>
        <p> Incluir imágenes externas </p>
        <img src="../public/vite.svg" alt="logo de VITE" />
        {/* <img src="../public/logo.png" alt="Foto del Instituto" /> */}


        <p> Incluir iconos externos </p>
        <FaFacebookSquare /><FaInstagramSquare /><FaTwitter />
    </div>
  )
}

// export const RedesSociales2 = ({enlaces}) => {
//   return (
//     let salida="";             
//     return{
//         <>
//           <a href={enlaces(0).url}><img src={enlaces(0).imagen} /></a> ;
//           <a href={enlaces(1).url}><img src={enlaces(1).imagen} /></a>  ; 
//         </>
//     }  
//   )
// }