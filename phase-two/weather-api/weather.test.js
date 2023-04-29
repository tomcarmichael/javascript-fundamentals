const Weather = require('./weather');
const WeatherClient = require('./weather_client');

// Real response data for Bristol at time of test creation
mockResponseData = '{"coord":{"lon":-71.1662,"lat":41.8334},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":13.6,"feels_like":12.48,"temp_min":11.34,"temp_max":14.75,"pressure":1018,"humidity":56},"visibility":10000,"wind":{"speed":5.81,"deg":121,"gust":8.94},"clouds":{"all":100},"dt":1682784227,"sys":{"type":2,"id":2006747,"country":"US","sunrise":1682761435,"sunset":1682811596},"timezone":-14400,"id":4931378,"name":"Bristol","cod":200}'

jest.mock('./weather_client.js');

describe('Weather class', () => {
  beforeEach(() => {
    WeatherClient.mockClear();
  });
  it('loads a location and then returns its weather data', (done) => {
    const mockWeatherClient = new WeatherClient();

    mockWeatherClient.fetchWeatherData.mockImplementation(() => {
      return new Promise((resolve, reject) => {
        resolve(mockResponseData);
      });
    } );

    const weatherInstance = new Weather(mockWeatherClient);
    weatherInstance.load('Bristol')
      .then(() => {
        expect(weatherInstance.getWeatherData()).toEqual(mockResponseData);
        done();
      });
  });
});