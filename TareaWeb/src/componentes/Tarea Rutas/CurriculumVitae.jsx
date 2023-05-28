
import React from 'react'
import './css/curriculumvitae.css'

export default function Curriculum (){
    return(
<div className="container">
      <h1 className="heading">Curriculum Vitae</h1>

      <div className="section">
        <h2 className="name">Marco Antonio Sarango Guaman</h2>
        <p className="contact-info">Calle Jasinto Anglada 41,04680, Vera Almería | 643244520 | markssarango209@gmail.com</p>
      </div>

      <div className="section">
        <h3 className="section-title">Experiencia laboral</h3>
        <ul>
          <li>
            <h4 className="company-name">Medipalm</h4>
            <p className="job-title">Posición ocupada: Regador</p>
            <p>Fecha de inicio: 12/04/2023 - Fecha de finalización: 12/06/2023</p>
            <p className="description">Descripción de tus responsabilidades y logros en el puesto: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, fugit temporibus veritatis accusamus quo eligendi itaque distinctio ullam ab sequi doloremque atque ut! Assumenda nulla molestias unde accusantium illum quisquam!</p>
          </li>
          <li>
            <h4 className="company-name">Cualin Cualiti</h4>
            <p className="job-title">Posición ocupada: Agricola</p>
            <p>Fecha de inicio: 12/04/2023 - Fecha de finalización: 12/06/2023</p>
            <p className="description">Descripción de tus responsabilidades y logros en el puesto: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, fugit temporibus veritatis accusamus quo eligendi itaque distinctio ullam ab sequi doloremque atque ut! Assumenda nulla molestias unde accusantium illum quisquam!</p>
          </li>
          <li>
            <h4 className="company-name">Citricos del Almazora</h4>
            <p className="job-title">Posición ocupada: Agricola</p>
            <p>Fecha de inicio: 12/04/2023 - Fecha de finalización: 12/06/2023</p>
            <p className="description">Descripción de tus responsabilidades y logros en el puesto: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, fugit temporibus veritatis accusamus quo eligendi itaque distinctio ullam ab sequi doloremque atque ut! Assumenda nulla molestias unde accusantium illum quisquam!</p>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3 className="section-title">Educación</h3>
        <ul>
          <li>
            <h4 className="company-name">IES Cura Valera</h4>
            <p className="job-title">Título obtenido: ASIRT</p>
            <p>Año de graduación: 2023</p>
          </li>
        </ul>
      </div>

      <div classname="section">
        <h3 classname="section-title">Habilidades</h3>
        <ul classname="skills">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt eligendi expedita natus, amet quas. Culpa unde ducimus eius doloremque quasi suscipit est eos non, rem, deleniti dicta numquam quas?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt at qui rerum maxime quia soluta, odio pariatur, dolore ipsa assumenda aspernatur quae nihil distinctio vel exercitationem commodi quidem enim.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis et eveniet autem repellendus dolore vel, qui exercitationem illum, sequi quia soluta, magnam quasi voluptate sed quo dolorem fugiat porro eos.</li>
        </ul>
      </div>
    </div>
  );
};