const getNumberSign = (number) => {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return "neither";
  };
}

module.exports = getNumberSign