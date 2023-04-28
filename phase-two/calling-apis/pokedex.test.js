const Pokedex = require('./pokedex');

describe('Pokedex', () => {
  it('adds pikachu to the pokedex', (done) => {
    pokedex = new Pokedex();
    pokedex.catch('pikachu')
      .then(() => {
          all_pokemon = pokedex.all();
          expect(all_pokemon[0].name).toEqual('pikachu');
          done();
        });
    });
});
