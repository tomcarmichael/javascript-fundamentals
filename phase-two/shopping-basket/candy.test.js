const Candy = require('./candy');

describe('Candy', () => {
  it('returns the name mars from getName() method', () => {
    const newCandy = new Candy('Mars', 4.99);
    expect(newCandy.getName()).toBe('Mars')
  })

  it('returns the name mars from getPrice() method', () => {
    const newCandy = new Candy('Mars', 4.99);
    expect(newCandy.getPrice()).toBe(4.99)
  })
})