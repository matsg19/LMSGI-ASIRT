import { useState } from "react";

// import "./App.css";

import { Cabecera, Cabecera2, CabeceraEstilos } from "./componentes/Cabecera";
import { ElementoLista } from "./componentes/ElementoLista";
import { RedesSociales, RedesSociales2 } from "./componentes/RedesSociales";
import Notificaciones from "./componentes/Notificaciones";
import ExtraerINFO, {
  ListarItems,
  TablaItems,
} from "./componentes/ListarItems";
import { Pokemon, Pokemon2 } from "./componentes/Pokemon";

import CarouselBootstrap from "./componentes/CarouselBootstrap";
import {CardMaterialUI,ImageAvatars} from "./componentes/CardMaterialUI";

function App() {
  const [count, setCount] = useState(0);
  let vector = [1, 4, 77, 34];
  let enlace = [
    {
      imagen:
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.jpg",
      url: "https://es-es.facebook.com/",
    },
    {
      imagen:
        "http://www.igestweb.es/blog/wp-content/uploads/2013/09/instagram.png",
      url: "https://www.instagram.com/",
    },
    {
      imagen:
        "http://www.igestweb.es/blog/wp-content/uploads/2013/09/instagram.png",
      url: "https://www.instagram.com/",
    },
  ];

  let andalucia = [
    { nombre:"Almería", imagen: "/media/Almería.jpg", alt: "foto de Almería" },
    { nombre:"Cádiz", imagen: "/media/Cádiz.jpg", alt: "foto de Cádiz" },
    { nombre:"Córdoba", imagen: "/media/Córdoba.jpg", alt: "foto de Córdoba" },
    { nombre:"Granada", imagen: "/media/Granada.jpeg", alt: "foto de Granada" },
    { nombre:"Huelva", imagen: "/media/Huelva.jpg", alt: "foto de Huelva" },
    { nombre:"Jaén", imagen: "/media/Jaén.jpg", alt: "foto de Jaén" },
    { nombre:"Málaga", imagen: "/media/Málaga.jpg", alt: "foto de Málaga" },
    { nombre:"Sevilla", imagen: "/media/Sevilla.jpg", alt: "foto de Sevilla" },
  ];

  return (
    <div>
      <p> Creando cabeceras en React y pasando parámetros </p>
      <Cabecera loquesea="loquesea" />
      <Cabecera2 mensaje="hola como estás" otro={vector} />
      <Cabecera2 otro={vector} />

      <p>
        {" "}
        Creando una lista en React y probando el elemento fragment de React
      </p>
      <ul>
        <ElementoLista />
        <ElementoLista />
      </ul>

      <p>Incluir imágenes e iconos de React</p>
      <RedesSociales />

      <p>Incluir imágenes y URL de redes sociales desde un array de objetos</p>
      <RedesSociales2 enlaces={enlace} />

      <p>
        Componente que comprueba si los atributos están puestos y con valores
        correctos
      </p>
      <Notificaciones message="" type="success" id={3} />

      <h3>Mostrar la información de un array con lista o Tabla en REACT</h3>
      <p>Crear una lista a partir de un array</p>
      <ListarItems />
      <p>Crear una tabla a partir de un array</p>
      <TablaItems />



      <h3>Decidir si sacar la información de un array de una forma u otra</h3>
      <ExtraerINFO tipo="liadfads" />

      <h3>Tratar información JSON de POKEAPI</h3>
      <Pokemon id={25} />

      <Pokemon2 id={25} />

      <h3>Pasar estilos como prop</h3>
      <CabeceraEstilos mensaje="Como mola React con estilos" color="rojo" />

      <h3> Usando Bootstrap en React </h3>
      {/* Hay que poner import 'bootstrap/dist/css/bootstrap.min.css'; antes de poner el código junto con los import correspondientes de los elementos usados*/}
      <CarouselBootstrap andalucia={andalucia}/>
      
      <h3> Usando Material UI en React </h3>
      <CardMaterialUI />
      <ImageAvatars />
      <h4> Puede que lo que busques esté en Bootstrap, Material UI o que te lo hagas tu mismo. En cualquier caso, puedes combinarlos. ¡No reinventes la rueda!</h4>
    </div>
  );
}

export default App;