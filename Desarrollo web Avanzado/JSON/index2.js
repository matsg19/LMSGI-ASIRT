//LECTURA DE DATOS IMPORTANDO EL FICHERO DIRECTAMENTE
//Equivalente a esto pero en <script hay que poner esto: <script type="module"
import json2 from "./heroes.json" assert { type: "json" };

// Procesar el fichero para mostrar por HTML
document.getElementById("demo").innerHTML += json2.map((heroe) => {
  if (heroe.publisher == "Marvel Comics") {
    return "<li>" + heroe.superhero + ", " + heroe.publisher + "</li>";
  }
}).join('');
// Colocar ahora los de DC
document.getElementById("demo2").innerHTML += json2.map((heroe) => {
    if (heroe.publisher == "DC Comics") {
      return "<li>" + heroe.superhero + ", " + heroe.publisher + "</li>";
    }
  }).join('');

//LECTURA DE DATOS GENERAL COMO FICHERO EN UNA URL
fetch("./heroes.json")
  .then((response) => response.json()) //Los .then son lo que se llama promises que van encadenando la salida hacia el siguiente promise
  .then((jsonData) => {
    // Procesar el fichero para mostrar por HTML
    document.getElementById("demo3").innerHTML += jsonData.map((heroe) => {
      if (heroe.publisher == "Marvel Comics") {
        return "<li>" + heroe.superhero + ", " + heroe.publisher + "</li>";
      }
    }).join('');
    // Colocar ahora los de DC
    document.getElementById("demo4").innerHTML += jsonData.map((heroe) => {
        if (heroe.publisher == "DC Comics") {
          return "<li>" + heroe.superhero + ", " + heroe.publisher + "</li>";
        }
      }).join('');
  })
  .catch((error) => {//Sacar si hay algún error en la lectura
    throw error;
  });
