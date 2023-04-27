const Candy = require('./candy');

class ShoppingBasket {
  constructor() {
    this.basket = [];
  }

  addItem(candy) {
    this.basket.push(candy);
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basket.forEach(candy => {
      totalPrice += candy.getPrice();
  })
  return totalPrice;
  }
}

module.exports = ShoppingBasket;