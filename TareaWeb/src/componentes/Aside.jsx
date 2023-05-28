import React from 'react';
import './css/aside.css';

export const Aside = () => {
  const noticias = [
    {
      id: 1,
      titulo: '11/01/2009',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati amet velit voluptates incidunt, ducimus non eveniet molestiae qui ad commodi quas error, magnam quaerat expedita animi vitae necessitatibus temporibus.',
    },
    {
      id: 2,
      titulo: '11/01/2009',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati amet velit voluptates incidunt, ducimus non eveniet molestiae qui ad commodi quas error, magnam quaerat expedita animi vitae necessitatibus temporibus.',
    },
    {
      id: 3,
      titulo: '11/01/2009',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati amet velit voluptates incidunt, ducimus non eveniet molestiae qui ad commodi quas error, magnam quaerat expedita animi vitae necessitatibus temporibus.',
    },
  ];

  return (
    <aside>
      <h2 className='seccion-titulo'>Noticias y eventos</h2>
      {noticias.map((noticia) => (
        <div key={noticia.id} className="noticia">
          <h3 className='titulo-noticia'>{noticia.titulo}</h3>
          <p className='descripcion-noticia'>{noticia.descripcion}</p>
        </div>
      ))}
    </aside>
  );
};