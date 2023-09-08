import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../Redux/weatherSlice';

function Weather() {
  const dispatch = useDispatch();
  const { weather, status, error } = useSelector((state) => state.weather);

  useEffect(() => {
    if (status === 'not loaded') {
      console.log('not working');
      dispatch(getWeatherData());
    }
  }, [dispatch]);

  console.log(weather, status, error);
  return (
    <>
      <h1>weather data</h1>
    </>
  );
}

export default Weather;
