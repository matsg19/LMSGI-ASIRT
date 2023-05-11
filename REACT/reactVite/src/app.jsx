import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
// import './app.css'
import { Cabecera, Cabecera2} from './componentes/Cabecera'
import { ElementoLista, ElementoLista2 } from "./componentes/ElementoLista";

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <p> Creando cabeceras en React </p>
    <Cabecera />
    <Cabecera2 />

    <p> Creando una lista en React </p>
    <ul>
      <ElementoLista />
      <ElementoLista2 />
    </ul>

    <RedesSociales />
  </div>
  )
}
