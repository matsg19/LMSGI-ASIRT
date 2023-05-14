console.log('Lectura de datos de Pokeapi');

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('DOMContentLoaded', async () => {
  const pokemons = [];
  const uniqueIds = new Set();

  while (uniqueIds.size < 6) {
    const randomId = getRandomInt(1, 152);
    uniqueIds.add(randomId);
  }

  for (const id of uniqueIds) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();

      const pokemon = {
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
      // en esta parte tube que volver a repetir el codigo pero cambiando el nombre de la variable para que este me funcionara de la forma en la euq esta no se repitan
      const pokemon1 = {
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
      const pokemon2 = {
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
      const pokemon3 = {
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
      const pokemon4 = {
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
      const pokemon5 = {
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

      pokemons.push(pokemon);
    } catch (error) {
      console.log(error);
    }
  }

  pintarCards(pokemons);
});

const pintarCards = (pokemons) => {
  const flex = document.querySelector('.flex');
  const template = document.getElementById('card').content;
  const fragment = document.createDocumentFragment();

  for (const pokemon of pokemons) {
    const clone = template.cloneNode(true);
    clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgCvg);
    // clone.querySelector('.card-body-img').setAttribute('src', pokemon.imgJuego);
    clone.querySelector('.card-body-title').innerHTML = `${pokemon.nombre} <span>${pokemon.hp}hp</span>`;
    clone.querySelector('.card-body-text').textContent = pokemon.experiencia + ' exp';
    clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.ataque + 'K';
    clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.especial + 'K';
    clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defensa + 'K';

    fragment.appendChild(clone);
  }
  

  flex.appendChild(fragment);
};