const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
  it('finds mars and maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  })
  it('finds only mars', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars']);
  })
  it('finds candies starting with and cheaper than 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  })
});