import { useState } from "react";

// import "./App.css";
import { Cabecera, Cabecera2 } from "./componentes/Cabecera";
import { ElementoLista } from "./componentes/ElementoLista";
import { RedesSociales } from "./componentes/RedesSociales";
import { ListarItems } from "./componentes/ListarItems";


function App() {
  const [count, setCount] = useState(0);
  let vector=[11,4,75,34];
  let enlaces=[
    {<imagen src:"" ,url:"" />};
    {<imagen src:"" ,url:"" />};
  ];

  return (
    <div>
      <p> Creando cabeceras en React </p>
      <Cabecera />
      <Cabecera2 mensaje="Hola como estass" otro={vector} />
      <Cabecera2 otro="11,4,75,34"/>
      <p> Creando una lista en React </p>
      <ul>
        <ElementoLista />
        <ElementoLista />
      </ul>
      <RedesSociales enlaces={enlace}/>
      
      <p>Componente que notifica que este funcione</p>
      <Notificaciones />

      <p>Crear una lista apartir de una array</p>
      <ListarItems />
    </div>
  );
}

export default App;