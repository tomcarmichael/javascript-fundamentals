const fetchPokemon = (pokemon_name) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
    .then((response) => {
      // use of curly braces necessitates explicit return, without them the anonymous function implicitly returns.
      return response.json()})
    .then((data) => {
      console.log(data)
    });
};

module.exports = fetchPokemon