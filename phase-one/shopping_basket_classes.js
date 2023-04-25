class Candy {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items = this.items.concat(item);
  }

  getTotalPrice() {
    let total_price = 0;
    this.items.forEach((item) => {
      total_price += item.getPrice()
    });
    return total_price;
  }
}

const candy = new Candy('Mars', 4.99);

candy.getName();

candy.getPrice();

const basket = new ShoppingBasket();

console.log(basket.getTotalPrice());

basket.addItem(candy);

console.log(basket.getTotalPrice());

basket.addItem(new Candy('Skittle', 3.99));
basket.addItem(new Candy('Skittle', 3.99));

console.log(basket.items);

console.log(basket.getTotalPrice());

module.exports = {
  Candy: Candy, 
  ShoppingBakset: ShoppingBasket
}