// var i;
// for (i=0; i<10; i++){
//     console.log(i);
// }
// console.log(i + 3 ); //devuelve 13

// const PI =3.14158523;
// let radio=3;
// console.log(2*PI*radio);

// // comentario de unalinea
/*esto es un comentario del tamaño que quieras */

// const IVA =21;
// let radiocirculo;
// let LadoPoligonoRectoMayor;
// let radio_poligono_recto_mayor;

// // salida por pantalla o consola

// console.log("Hola mundo");
// document.write("<h1>texto generado desde java script</h1>");
//alert("alerta de javascript")
// let numero=prompt("Introduce un numero")
// document.write("el numero introducido es: " + numero);
// confirm("punsar para morir")

//ejemplo de la diapositiva

// codigo de if else
// let edad;
// edad = Number((prompt("Introduce tu edad: ")));
// if (isNaN(edad)){
//     console.log("lo que has introducido no es una edad");
// }
// if (edad < 18) {
//     console.log("Tienes menos de 18 años.");
// } 
// else if (edad >= 18 && edad <= 21) {
//     console.log("Tenes entre 18 y 21 años de edad.");
// } 
// else {
//     console.log("Tiene más de 21 años.");
// }

// codigo de switch
// let expr='Manzanas'
// switch (expr) {
//     case 'Naranjas':
//         console.log('El kilogramo de naranjas cuesta $0.59.');
//     break;
//     case 'Manzanas':
//     case 'Platanos':
//         console.log('El kilogramo cuesta $0.48.');
//     break;
//     default:
//         console.log('Lo lamentamos, no disponemos de ' + expr + '.');
//    }

//composision de texto

// console.log("hola mundo")
// let nombre = "Marco Sarango";
// let edad=37;
// console.log("¡Hola, "+ nombre);
// console.log("¡Hola, "+ nombre+ " Tienes "+ edad+" años");

//operador Elvis

// let valor=5;
// if (valor >= 5){
//     console.log("estas aprobado");
// }
// else{
//     console.log("estas reprobado");
// }

// let resultado= valor>=5 ? "estas aprobado": "estas suspenso" ;

// // bucles
// let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
// //bucle while
// console.log("salida bucle while")
// let=0;
// while(i<6){
//     console.log(v[i]);
//     i=i+1;
// }
// // bucle for
// console.log("salida bucle for")
// for (let j=0; j<v.length; j++)

// //bucle do-while
// console.log("salida bucle do-while")
 
// //  /* Y se compara con todos los demas*/
//  for (let j=0; j<v.length; j++) {
//   if (v[j]>v[i]) {
//   let aux=v[i];
//   v[i]=v[j];
//   v[j]=aux;
//   } /* Fin del if*/
//   } /* Fin del for interno*/
//  /* fin del for externo*/
// /* Se imprime el contenido*/
//  for (let i=0; i<v.length; i++){
//   console.log("Pos "+i+ ":"+v[i]);
//  }
//  console.log(v);


// Ejemplo diapositiva 50
// let v=[9.98, 7.86,"marco", 4.53,8.91, 5.76, 2.31,-3,20];
// /* Vamos cogiendo cada elemento...*/
// for (let i=0; i<v.length; i++){
//      /* Y se compara con todos los demas*/
//     for (let j=0; j<v.length; j++) {
//         if (v[j]<v[i]) {
//             let aux=v[i];
//             v[i]=v[j];
//             v[j]=aux;
//         } /* Fin del if*/
//     } /* Fin del for interno*/
// } /* fin del for externo*/
// /* Se imprime el contenido*/
// for (let i=0; i<v.length; i++){
//     console.log("Pos "+i+ ":"+v[i]);
// }
// console.log(v);

// let numero=prompt("introduce un numero");
// let salida='';
// for (let i=0; i<numero;i++){
//     for(let j=0;j<i+1;j++){
//         salida=salida+'*'; 
//     }
//     console.log(salida)
// }

// Actividad de la diapositiva 51
// let v=[9.98, 7.86, 4.53,8.91, 5.76, 2.31];
// let suma=0;
// for(let i=0;i<v.length;i++){
//     suma=suma+v[i];
// }
// let resultado=suma/v.length;
//     console.log(resultado);

// // similar la entrada hasta recibir un -1

// let dato;
// do{
//     dato=prompt("Introduce un numero o -1 para salir");
// }
// while(dato!=-1);

// ejemplo diapositiva 52
//comprobas si se ha metido un parametro

//  function ejemplo( nombre, apellidos="López") {
//      console.log("Hola "+ nombre+" "+apellidos);
//      }
//     ejemplo("Manuel");
//     ejemplo("Pepito", "Grillo");

// ejemplo diapositica 52 ejemplo2
// function ejemplo(param1, param2, ...restParams){
//     console.log(restParams);
//     }
//     ejemplo('a', 'b', 'c', 'd', 'e', 'f');
//en restParams está el array ["c", "d", "e", "f"] que
//es el contenido de la lista separada por comas.
//Si fuera un array se usaría así:

//control de procedimiento
    // function sum(x, y, z) {
    //   return x + y + z;
    // }
    //  function sum2(x,y,z){
    //     console.log(x+y+z);
    //  }
    //  const numbers = [1, 2, 3];
    //  console.log(sum(...numbers)+3);
    //  console.log(sum2(...numbers)+3);
    

// creamos una funcion
// function multiplicar(a,b){
//     return a*b;
// };
// console.log(multiplicar(5,23))

// // se define una variable que apunta a una funcion y el return expresa la funcion.
// let multiplicar2 = function(a,b) {
//      return a * b; 
//     }
// console.log(multiplicar2(5 , 23 ));


// let multiplicar3 = (a,b) => a * b; // FUNCIÓN FLECHA
// console.log(multiplicar3(5 , 23 ));  //15

function getMinMaxForLoop(arr){
    let maximum = arr[0];
     let minimum = arr[0];
    for (let i = 0 ; i < arr.length; i++) {
    if (maximum < arr[i]) {
    maximum = arr[i];
    } else {
    minimum = arr[i];
    }
    }
   let result = ([maximum, minimum]);
    return result;
   };
   console.log('getMinMaxForLoop :',getMinMaxForLoop([10,3,8,1,33]))

