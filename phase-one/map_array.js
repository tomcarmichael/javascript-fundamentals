const generateMessage = (recipient_name) => {
  return `Hi ${recipient_name}! 50% off our best candies for you today!`;
}

const generateMessages = (array_of_recipients, generateMessageFunction) => {
  return array_of_recipients.map(generateMessageFunction);
}

const recipients = [
  'Maddy',
  'Matt',
  'Ana',
  'Sunny',
  'Tom'
]

console.log(generateMessages(recipients, generateMessage));