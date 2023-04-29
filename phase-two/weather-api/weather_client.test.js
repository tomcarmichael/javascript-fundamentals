const WeatherClient = require('./weather_client.js');
const jestFetchMock = require('jest-fetch-mock');
const apiKey = require('./apiKey');

jestFetchMock.enableMocks();

// Mock JSON response data taken from a real example API call
const mockWeatherResponse = '{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":16.08,"feels_like":15.34,"temp_min":14.86,"temp_max":17.86,"pressure":1020,"humidity":61},"visibility":10000,"wind":{"speed":2.57,"deg":90},"clouds":{"all":100},"dt":1682772730,"sys":{"type":2,"id":2075535,"country":"GB","sunrise":1682743006,"sunset":1682795928},"timezone":3600,"id":2643743,"name":"London","cod":200}';

describe('WeatherClient class', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches weather data', (done) => {
    fetch.mockResponseOnce(mockWeatherResponse);

    client = new WeatherClient;
    client.fetchWeatherData('London')
      .then((weatherData) => {
        expect(weatherData.name).toEqual('London');

        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${apiKey}`);
        done();
      });
  });
});