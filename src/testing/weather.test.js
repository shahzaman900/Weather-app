describe('Selectors in weatherSlice', () => {
  const testData = {
    weather: [
      { main: { temp: 27.44 } },
      { name: 'Pakistan' },
    ],
    Status: false,
    error: null,
  };

  it('Weather should return the weather data', () => {
    const selectedData = testData.weather;
    expect(selectedData).toEqual(testData.weather);
  });

  it('MockState should return the weather status', () => {
    const selectedStatus = testData.Status;
    expect(selectedStatus).toBe(testData.Status);
  });

  it('MockState should return the weather error', () => {
    const selectedError = testData.error;
    expect(selectedError).toBe(testData.error);
  });
});
