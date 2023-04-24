const upperCaseMessage = (message) => {
  return message.toUpperCase();
}

const transform = (message, transformFunction) => {
  return transformFunction(message);
}

console.log(transform("hello", upperCaseMessage));
