class Pokedex {
  constructor() {
    // an array of objects containing pokemon data
    this.all_pokemon = []
  }

  catch(pokemon_name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon_name}`)
      .then((response) => response.json())
      .then((data) => {
        let pokemon = {};
        pokemon.name = data.name;
        pokemon.id = data.id;
        pokemon.height = data.height;
        pokemon.weight = data.weight;
        this.all_pokemon.push(pokemon);
      });
  }

  all() {
    return this.all_pokemon;
  }
 }

 module.exports = Pokedex