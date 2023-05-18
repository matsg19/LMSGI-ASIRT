import React, {useState,useEffect} from 'react'

// Hasta ahora conocemos la necesidad de llamar de forma asíncrona en Javascript a JSON externos como los obtenidos de la POKEAPI
const fetchData = async (id) => {
    //Para usar await la función tiene que usar async
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    const pokemon = {
      numero: data.id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      imgJuego: data.sprites.front_default,
      imgCvg: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      experiencia: data.base_experience,
      hp: data.stats[0].base_stat,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      especial: data.stats[3].base_stat,
    };
    return pokemon;
       
  };

  //Si intentas usar esta función verás que falla porque REACT es SPA y los pokemon no están en RAM cuando se ha iniciado
export const Pokemon = ({id}) => {
  let pokemon = fetchData(id);
  console.log(pokemon);
  return (
    <div>
        <h3> Número: {pokemon.numero} - {pokemon.nombre}</h3>
        <img src={pokemon.img} alt="pokemon"/>
        <p>HP: {pokemon.hp} Ataque: {pokemon.ataque} Defensa: {pokemon.defensa}</p>
    </div>
  )
}

//Necesitaremos hacer uso de otras propiedades que llamaremos Hooks para poder consultar cosas que están fuera de la página en RAM
export const Pokemon2 = ({id}) => {
    const [pokemon, setName] = useState([]);

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/"+id) // hacemos la petición get
      .then(res => res.json()) // cuando hayamos terminado (then) parseamos a json la respuesta de la petición
      .then(data => setName(
        {
          numero: data.id,
          img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+data.id+".png",
          imgJuego: data.sprites.front_default,
          imgCvg: data.sprites.other.dream_world.front_default,
          nombre: data.name,
          experiencia: data.base_experience,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          especial: data.stats[3].base_stat,
        }
      )); // cuando hayamos terminado (then) actualizamos el estado nombre
    }, []); //Debemos usar los [] para que la petición sólo se ejecute cuando el componente se monte. De lo contrario se ejecutaría en cada render. Si ponemos una variable de estado dentro de los [], la petición se ejecutárá cada vez que esa variable cambie.
  
    return (
      <div>
        <h3> Número: {pokemon.numero} - {pokemon.nombre}</h3>
        <img src={pokemon.img} alt="pokemon"/>
        <p>HP: {pokemon.hp} Ataque: {pokemon.ataque} Defensa: {pokemon.defensa}</p>
      </div>
    )
}
