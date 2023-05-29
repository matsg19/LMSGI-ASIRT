import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/productos.css'

export default function Producto ({nombre}){
let jsonData = JSON.parse([
            {"name":"impresora","description":"Una impresora es un dispositivo periférico de salida del ordenador que permite producir una gama permanente de textos o gráficos de documentos almacenados en un formato electrónico, imprimiéndolos en medios físicos, normalmente en papel, utilizando cartuchos de tinta o tecnología láser (con tóner). Las impresoras son ampliamente utilizadas tanto en entornos domésticos como en entornos empresariales para imprimir documentos, informes, fotografías, gráficos y otros tipos de archivos en formato impreso."},
            {"name":"monitor","description":"El monitor es un dispositivo electrónico de salida de la computadora en el que se muestran las imágenes y textos generados por medio de un adaptador gráfico o de video de ésta. El término monitor se refiere normalmente a la pantalla de vídeo, y su función principal y única es la de permitir al usuario interactuar con la computadora. Una computadora típica presenta un monitor con tecnología CRT (tubos de rayos catódicos), la misma que emplean los televisores; sin embargo, hoy en día existe la tecnología TFT (transistor de película fina) que reduce significativamente el volumen de los monitores."},
            {"name":"raton","description":"El ratón o mouse (en inglés pronunciado /maʊs/) es un dispositivo apuntador utilizado para facilitar el manejo de un entorno gráfico en una computadora. Generalmente está fabricado en plástico, y se utiliza con una de las manos. Detecta su movimiento relativo en dos dimensiones por la superficie plana en la que se apoya, reflejándose habitualmente a través de un puntero, cursor o flecha en el monitor. El ratón se puede conectar de forma cableada (puertos PS/2 y USB), o inalámbricamente por medio de un adaptador USB que se conecta a la computadora y esta recibe la señal del ratón, aunque también pueden ser por medio de conectividad infrarroja o Bluetooth."},
            {"name":"teclado","description":"En informática, un teclado es un dispositivo de entrada, en parte inspirado en el teclado de las máquinas de escribir, que utiliza un sistema de puntadas o márgenes, para que actúen como palancas mecánicas o interruptores electrónicos que envían toda la información a la computadora o al teléfono móvil. Presenta teclas alfanuméricas (letras y números), de puntuación (punto, coma, dos puntos entre otras) y teclas especiales (las cuales cumplen ciertas funciones o se combinan en conjunto para lograr una función y evitar el uso del ratón). "},
            {"name":"usb","description":"USB responde a las siglas Universal Serial Bus y hace referencia a un protocolo de conexión que permite enlazar diversos periféricos a un dispositivo electrónico (frecuentemente, un ordenador) para el intercambio de datos, el desarrollo de operaciones y, en algunos casos, la carga de la batería del dispositivo o dispositivos conectados. Es, por tanto, básicamente, un puerto que funciona de toma de conexión entre diferentes aparatos."}]);
let imagenes = [
    { imagen: "media de rutas/impresora.jpg", alt: "Foto de una impresora" },
    { imagen: "media de rutas/monitor.png", alt: "Imagen de un monitor" },
    { imagen: "media de rutas/raton.jpeg", alt: "Imagen de un ratón" },
    { imagen: "media de rutas/teclado.jpg", alt: "Imagen de un teclado" },
    { imagen: "media de rutas/usb.jpg", alt: "Imagen de un dispositivo USB." },
  ];
let imagen = '';
let texto = '';
let alt = '';
let i = 0;
while (i < 5) {
    if (nombre == jsonData[i].name){
        texto = jsonData[i].description;
        imagen = imagenes[i].imagen;
        alt = imagenes[i].imagen;
        i = 5;
    }
    ((i++));
}

return (
    <div className="productos-container">
      <img src={imagen} alt={alt} className="productos-image" />
      <p className="productos-description">{texto}</p>
    </div>
    );
};