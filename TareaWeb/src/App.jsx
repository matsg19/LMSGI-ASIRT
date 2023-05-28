import { useState } from 'react'
import { Header } from './componentes/Header'
import { NavBar } from './componentes/NavBar'
import './App.css'
import { Main } from './componentes/Main'
import { Footer } from './componentes/Footer'
import Ruta from './componentes/Tarea Rutas/Ruta'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <NavBar />
      <Main />
      <Footer />      
      {/* <Ruta /> */}
    </>
    
  )
};

export default App
