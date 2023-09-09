import { selectedWeatherData } from '../Redux/weatherSlice';

describe('weatherSlice selectors', () => {
  const mockState = {
    weather: {
      weatherData: [
        { location: { country: 'Pakistan' } },
        { location: { country: 'India' } },
      ],
      status: 'Succsess',
      error: null,
    },
  };

  it('selectWeatherData should return Data related Weather', () => {
    expect(selectedWeatherData(mockState)).toEqual(mockState.weather.weather);
  });
});
