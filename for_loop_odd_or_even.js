const forLoop =  () => {
  let parity;
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      parity = 'even';
    } else {
      parity = 'odd';
    };
    console.log(`${i} is ${parity}`);
  };
};

module.exports = forLoop;