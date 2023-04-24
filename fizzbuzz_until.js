const fizzBuzzUntil = (number) => {
  for (let i = 1; i <= number; i++) {
    if ((i % 15.0) === 0) {
      console.log('FizBuzz');
    } else if ((i % 5.0) === 0) {
      console.log('Buzz');
    } else if ((i % 3.0) === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    };
  };
};

module.exports = fizzBuzzUntil;