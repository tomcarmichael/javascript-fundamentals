const numbers = [
  '1763687364',
  '4763687363',
  '7867867862',
  'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
];

function checkLength (string) {
  if (string.length <= 10) {
    return true;
  } else {
    return false;
  }
}

function filterLongNumbers (array) {
  return array.filter(checkLength);
}

console.log(filterLongNumbers(numbers));


console.log(filterLongNumbers(['4763687363', '7867867862']));