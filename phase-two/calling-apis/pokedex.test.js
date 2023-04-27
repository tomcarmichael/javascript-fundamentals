const Pokedex = require('./pokedex');

describe('Pokedex', () => {
  it('adds pikachu to the pokedex', (done) => {
    pokedex = new Pokedex();
    pokedex.catch('pikachu');
      pokedex.all()
        .then((all_pokemon) => {
          expect(all_pokemon[0].name).toEqual('pikachu');
        });
    });
});
