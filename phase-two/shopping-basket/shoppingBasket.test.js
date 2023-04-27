const ShoppingBasket = require('./shoppingBasket')
const Candy = require('./candy');

jest.mock('./candy');

describe('candy', () => {
  beforeEach(() => {
    Candy.mockClear();
  });

  it('adds item to basket and returns price', () => {
    const mockCandy = new Candy();

    mockCandy.getName.mockImplementation(() => 'Mars');
    mockCandy.getPrice.mockImplementation(() => 4.99);

    const basket = new ShoppingBasket();

    basket.addItem(mockCandy);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it('has called getName once', () => {
    const mockCandy = new Candy();

    mockCandy.getName.mockImplementation(() => 'Mars');
    mockCandy.getPrice.mockImplementation(() => 4.99);

    const basket = new ShoppingBasket();
    basket.addItem(mockCandy);
    basket.getTotalPrice();

    expect(mockCandy.getPrice).toHaveBeenCalledTimes(1);
  });
});


// describe('shoppingBasket', () => {
//   it('returns 4.99 after a candy is added to the basket', () => {
//     const basket = new ShoppingBasket();
//     expect(basket.getTotalPrice()).toBe(0);
//     const candyDouble = {name: 'Mars', price: 4.99}
//     basket.addItem(candyDouble);
//     expect(basket.getTotalPrice()).toBe(4.99);
//     expect(basket.getTotalPrice()).toBe(4.99);
//   })
// })