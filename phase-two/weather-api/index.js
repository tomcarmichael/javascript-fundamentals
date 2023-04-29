const apiKey = require('./apiKey');
const city = 'London';
const apiURL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

// Commented out this seemingly redundant line given in example materials:
// let weatherData = null;

fetch(apiURL)
  // lack of curly braces = implicit return
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData.main);
    console.log(weatherData.weather);
  });

console.log('requesting weather data');
