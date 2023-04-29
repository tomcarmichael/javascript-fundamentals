class Weather {
  constructor(client) {
    this.client = client
    this.weatherData = null
  }

  load(location) {
    return this.client.fetchWeatherData(location)
      .then((data) => this.weatherData = data);
  }

  getWeatherData() {
    return this.weatherData
  }
}

module.exports = Weather;
