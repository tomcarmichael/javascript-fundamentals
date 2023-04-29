class WeatherClient {

  fetchWeatherData (location) {
    const apiKey = require('./apiKey');
    const apiURL = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`;
    return fetch(apiURL)
      .then((response) => response.json())
  }
};

module.exports = WeatherClient;