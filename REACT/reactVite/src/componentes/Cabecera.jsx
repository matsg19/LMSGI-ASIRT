import React from 'react'

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