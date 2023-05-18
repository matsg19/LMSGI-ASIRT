import React, { useState } from 'react';
// import './cabecera.css'
export const Cabecera = () => {
    const [nombre,setNombre]=useState("Marco Sarango");
    const cambiarNombre=(nuevoNombre) =>{
    setNombre(nuevoNombre);
    }
 return (
 <>
    <h1>Mi nombre es: {nombre}</h1>
    <button onClick={nombree => cambiarNombre()}>texto2</button>
 </>
 );
};
