const fetchPokemon = require('./api');

describe('fetchPokemon', () => {
  it('returns a promise containing an object in which is pikachus pokemon data', (done) => {
    fetchPokemon('pikachu')
      .then((pokemon) => {
        expect(pokemon.name).toEqual('pikachu');
      })
      done();
  });
});