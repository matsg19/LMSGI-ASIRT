import React from 'react'
import { BrowserRouter, Route, Routes, useParams} from 'react-router-dom';
import Error404 from './Error404.jsx';
import NavBar from './NavBar.jsx';
import About from './About.jsx';
import CurriculumVitae from './CurriculumVitae.jsx';
import Productos from './Productos.jsx';

export default function Rutas () {
    return (
      <BrowserRouter>
        <header>
            <NavBar/>
        </header>
        
        <main>
        <Routes>
          <Route exact path="/" element={<Home/>} />
            <Route path="/productos/:nombre" element={<Producto/>} />
            <Route path="/sobremi" element={<SobreMi/>} />
          <Route path="*" element={<NoPage/>} />
        </Routes>
        </main>
      </BrowserRouter>
    )
  }

  function Home() {
    return (
        <CurriculumVitae />
    );
  }

  function SobreMi(){
    return (
        <>
        <About color="verde"/>
        <CurriculumVitae />
        </>
      
    );
  }

  function Producto() {
    const params = useParams();
    let nombre=params.nombre;
    switch (nombre){
      case "impresora":
        return (
          <Productos nombre={nombre}/>
        );
        break;
        case "monitor":
        return (
          <Productos nombre={nombre}/>
        );
        break;
        case "teclado":
        return (
          <Productos nombre={nombre}/>
        );
        break;
        case "raton":
        return (
          <Productos nombre={nombre}/>
        );
        break;
        case "usb":
        return (
          <Productos nombre={nombre}/>
        );
        break;
      default:
        return (<h2>No se encuentra el producto {nombre}, por favor, inténtalo de nuevo. </h2>);
    }
    
  }

  function NoPage() {
    return (
    <div>
      <Error404 />
    </div>
    );
  }