//Ejemplo de JSON
let datos = [{ name: "John", age: 13, car: "Ford" },  { name: "Pilar", age: 23, car: "Seat" }];

//Vamos a convertir el fichero en una estructura JSON (por si no lo fuera)
let jsonData = JSON.parse(JSON.stringify(datos));
console.table(jsonData);

//Procesar el contenido del JSON
document.getElementById("demo").innerHTML += "<li>" + jsonData[0].name + ", " + jsonData[0].age + "</li>";

//Sacar en un bucle
for (let i=0;i<datos.length;i++){
  document.getElementById("demo2").innerHTML += "<li>" + jsonData[i].name + ", " + jsonData[i].age + "</li>";
}
//Sacar en un bucle usando map
//Fíjate en el resultado si no pones al terminar el paréntesis de map .join('')
document.getElementById("demo3").innerHTML +=jsonData.map((elemento,index)=>{
  return "<li>" + jsonData[index].name + ", " + jsonData[index].age + "</li>";
}).join('');

//Si no usas .join('') te va a crear separadores con ','