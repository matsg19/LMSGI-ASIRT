import React, { useState } from 'react'

export function Form() {
    function handleSubmit(e) {
    e.preventDefault();
    alert('You clicked submit.');
    }
    return (
    <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
    </form>
    );
   }    

// Ejemplo de cambiar nombre con useStates
export const CabezeraHook = () => {
    const [nombre,setNombre]=useState('Marco Sarango')
    const cambiarNombre=(nuevoNombre) =>{
        setNombre(nuevoNombre);
    }
    return(
        <>
        <h1>Mi nombre es: {nombre}</h1>
        <button onClick={e => cambiarNombre("otronombre")}>texto2</button>
        </>
    )
}
