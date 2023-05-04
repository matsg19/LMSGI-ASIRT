//Procesando JSON bajo una interfaz con TypeScript
interface PersonData {
    name: string;
    weight? : number;//opcional
    age: number;
    hairColor? : string; //opcional
    height: number;
  }
  
  function datosPersona(person: PersonData) {
      return `La persona se llama ${person.name}, tiene ${person.age} años y mide ${person.height} cm`;
  }
  
  let persona = {
      name: 'John Doe',
      age: 25,
      height: 170,
  };
  
  console.log(datosPersona(persona));