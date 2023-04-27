const fetchPokemon = (pokemon_name) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    .then((response) => response.json())
    // use of curly braces necessitates explicit return, without them the anonymous function implicitly returns. response.json()})
    .then((data) => {
      let pokemon = {};
      pokemon.name = data.name;
      pokemon.id = data.id;
      pokemon.height = data.height;
      pokemon.weight = data.weight;
      return pokemon;
    });
};

module.exports = fetchPokemon


// fetchPokemon('pikachu')
//   .then((pokemon) => console.log(pokemon))
