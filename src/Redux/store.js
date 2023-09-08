import { configureStore } from '@reduxjs/toolkit';
import cityWeatherSlice from './weatherSlice';

const store = configureStore({
  reducer: {
    weather: cityWeatherSlice,
  },
});

export default store;
