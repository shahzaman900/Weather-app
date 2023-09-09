describe('Selectors in weatherSlice', () => {
  const mockState = {
    weather: [
      { main: { temp: 27.44 } },
      { name: 'Pakistan' },
    ],
    Status: false,
    error: null,
  };

  it('Weather should return the weather data', () => {
    expect(mockState.weather).toEqual(mockState.weather);
  });

  it('MockState should return the weather status', () => {
    expect(mockState.Status).toBe(mockState.Status);
  });

  it('MockState should return the weather error', () => {
    expect(mockState.error).toBe(mockState.error);
  });
});
