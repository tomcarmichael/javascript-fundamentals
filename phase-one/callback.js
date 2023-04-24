const printGuinessSlogan = () => {
  console.log('Good things to come to those who wait');
}

const executeAfterDelay = (secondsToWait, functionToCall) => {
  // setTimeout takes time delay in ms
  setTimeout(functionToCall, (secondsToWait * 1000));
}

console.log('The program has started.');
let seconds = 4;
executeAfterDelay(seconds, printGuinessSlogan);
console.log(`The ${seconds} second timer has started and the callback function has been regsitered to be called later.`);
console.log('The rest of the program continues to run before the timer is up and the callback function is executed');

