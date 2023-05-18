import React from 'react'
import './cabecera.css'

export const Cabecera = () => {
  return (
    <h1>Marco Sarango</h1>
  )
}

export const Cabecera2 = (props) => {
    return (
      <>
      <h2>{props.mensaje}</h2>
      <h2>{props.otro[3]}</h2>
      </>
      
    )
  }

export const Cabecera3 = () => {
  return (
    <>
      <h1 className={color}>{mensaje}texto1</h1>
    </>
  );
};
