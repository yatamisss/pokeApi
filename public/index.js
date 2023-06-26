/*
1. Consumir el siguiente endpoint https://pokeapi.co/api/v2/pokemon/ y mostrar en 
el front lo siguiente:
a) Cards que contengan los 20 primeros pokemones (imagen y nombre del pokemon)
b) Utilizar Async / Await para trabajar las promesas de forma asíncrona
c) Usar Axios o Fetch para realizar la solicitud al endpoint mencionado
d) Ocupar Try / Catch para el manejo de errores
*/

const fetchPokemonData = async (pokemonId) => {
    try { 
      const resultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
      const data = await resultado.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los datos del Pokémon:', error);
    }
  }
  
  const displayPokemonCard = (pokemonId, name, image) => {
    const cardNameElement = document.querySelector(`[name-Poke${pokemonId}]`);
    const cardImageElement = document.querySelector(`[img-Poke${pokemonId}]`);
    cardNameElement.textContent = name;
    cardImageElement.setAttribute('src', image);
  }
  
  const displayFirst20Pokemon = async () => {
    for (let i = 1; i <= 20; i++) {
      const data = await fetchPokemonData(i);
      const image = data.sprites.other.dream_world.front_default;
      const name = data.species.name;
      displayPokemonCard(i, name, image);
    }
  }
  
  displayFirst20Pokemon();


