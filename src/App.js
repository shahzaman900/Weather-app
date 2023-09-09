import { Route, Routes } from 'react-router-dom';
import './App.css';
import Weather from './component/weather';
import CityDetail from './component/cityDetail';

function App() {
  return (
    <div className="App flex flex-col">
      <Routes>
        <Route index element={<Weather />} />
        <Route path="/city/:cityName" element={<CityDetail />} />
      </Routes>
    </div>
  );
}

export default App;
