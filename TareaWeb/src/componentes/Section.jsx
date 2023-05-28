import React from 'react';
import './css/section.css';
import MyCard from './MyCard';

export const Section = () => {
  return (
    <section>
      <MyCard color="orange" imagen="./logo.png" />
      <MyCard color="green" imagen="./media/Sevilla.jpg" />
      <MyCard color="blue" imagen="./mi_foto.jpg" />
    </section>
  );
};