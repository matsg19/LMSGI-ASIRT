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

// function getMinMaxForLoop(arr){
//     let maximum = arr[0];
//      let minimum = arr[0];
//     for (let i = 0 ; i < arr.length; i++) {
//     if (maximum < arr[i]) {
//     maximum = arr[i];
//     } else {
//     minimum = arr[i];
//     }
//     }
//    let result = ([maximum, minimum]);
//     return result;
//    };
//    console.log('getMinMaxForLoop :',getMinMaxForLoop([10,3,8,1,33]))

// let improeNota = (Nteoria,Npractica) => (return 0.6+Nteoria+)


// let teoria=prompt("Introduce la nota");
//     let practica=prompt("Introduce la nota de practicas");
//     function imprimeNota(Nteoria,Npractia){
//         let resultado=0.6Nteoria+0.4Npractica
//     }

//2. funcion factorial

// function factorial(n){
//     if (n<=1) return 1;
//     else return n*factorial(n-1);
// }
// console.log(factorial(3));
// console.log(factorial(5));

//3. Escribe la función que suma los elementos de un array

// let v=[9.45,8.34,6.23,4.342];
// let suma=0;
// for(leti=0;i<v.length;i++);{
//     suma+=v[i];
// }
// console.log("el resultado de la suma es: "+suma);

// es com el procedimiento reduce
// let v=[9.45,8.34,6.23,4.342];
// let suma=0;
// function getSUM(suma, num){
//     return suma +num;
// }

// console.log("el resultado de la suma es: "+v.reduce(getSUM));


/* 4.  Escribe un programa que devuelva el número de veces que
 aparece una letra en una cadena. Tu programa debería
 recibir una cadena y la letra.
 let programa = (cadena, letra) => {...}
 Después, debe devolver el número de veces que la letra
 aparece en la cadena. Dado el texto "JavaScript" y la letra
 "a", su programa debe devolver 2. Intenta hacerlo luego
 con substr (Recuerda que hay funciones ya creadas)*/

    // let frase='hola caracola';
    // let letra='la';
    // let programa =(cadena,busqueda)=>{
    //     let contador=0;
    //     for(let i=0;i<frase.length;i++){
    //         if(frase.substr(i,letra.length)==letra){
    //             contador++;
    //             i+=letra.length;
    //         }
    //         return contador;
    //     }
    // }
    // console.log("en la frase \" "+frase+" aparese "+programa(frase,letra)+" la letra "+letra)
/*5.  Escribe un programa para simular el comportamiento de
una calculadora.
Habrá un bucle do-while que irá pidiendo la operación
(+,-,*,/) que se introducirá con un número y los operandos
para que en un switch haga la operación.
Si se introduce -1 en la operación el programa finaliza*/

// function caracola(){
//     let numero1,numer2,resultado;
// }

//6. Escribe un programa llamado AdivinaNumero que genera
// un número aleatorio entre 0 y 100 y mediante un bucle dowhile vaya solicitando números al usuario hasta que
// acierte. Si el número introducido es menor o mayor que el
// objetivo se lo indicará en un alert. Si acierta le indicará que
// ha acertado y el número de intentos realizado. (usa
// Math.random y Math.floor)
// function adivina numero(){
//     let numero=math.floor(maath.random()*100)+1;

// }
// vector_numeros=new Array(3)
// vector_numeros[0]=23; vector_numeros[1]=-45.23
// vector_numeros[5]="hola"; vector_numeros[-1]=3;

// console.log(vector_numeros)

//  const fruits = ["Banana", "Orange"];
//  fruits.push("Kiwi", "Lemon"); 
//   console.log(fruits);
//  fruits.pop();
//  console.log(fruits);


// let v=[1,2,3,4,5,6];

// let a=[...v];
// console.log(a);
// a[0]=-3;
// console.log(a);
// console.log(v);

// Actividad: Genera un array de 5 números aleatorios donde no se repita
// ninguno. Antes de asignarlo tienes que ver si está ya con otro bucle.
// – Actividad: A partir del siguiente enlace, implementa el algoritmo de
// ordenación por burbuja y compara el resultado con la función sort. Array: [389,
// 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];





//manipulacion de acceso a objetos
var empleado={
    nombre:"Pepe Perez",
    edad:27,
    deportes:["ajedrez","fútbol"],
    estaJubilado:function (){
    if (this.edad>65) {
    return true
    } else {
    return false
    }
    }
   }

//acceso seguna a claves del objeto
console.log(empleado.edad);
console.log(empleado.deportes);
console.log(empleado.estaJubilado);


//    document.write("<br/>El nombre es:"+empleado.nombre)
//    document.write("<br/>¿Jubilado?" + empleado.estaJubilado() )
   