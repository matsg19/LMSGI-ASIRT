import React from 'react'
import './section.css'
import MyCard from './Mycard'


export const Section = () => {
  return (
    <section>
        <MyCard color="rojo"/>
        <MyCard color="verde"/>
        <MyCard color="gris"/>
        <MyCard bolor="azul"/>
    </section>
  )
}