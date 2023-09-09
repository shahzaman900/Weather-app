/* eslint-disable arrow-body-style */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../Redux/weatherSlice';
import world from '../img/world.png';
import afghanistan from '../img/af.png';
import china from '../img/china.png';
import india from '../img/india.png';
import iran from '../img/iran.png';
import nipal from '../img/np.png';
import pakistan from '../img/pakistan.png';
import tajikistan from '../img/tj.png';

function Weather() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { weather, status, error } = useSelector((state) => state.weather);

  const countryImages = {
    Afghanistan: afghanistan,
    China: china,
    Innichen: india,
    Iran: iran,
    Nepal: nipal,
    Pakistan: pakistan,
    Tajikistan: tajikistan,
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchedCountry = weather.filter((data) => {
    const country = data.name.toLowerCase();
    const find = search.toLowerCase();
    return country.includes(find);
  });

  useEffect(() => {
    if (status === 'not loaded') {
      dispatch(getWeatherData());
    }
  }, [dispatch]);

  if (status === 'not Loeaded') {
    return <h1>Loeading</h1>;
  }

  if (error) {
    return <h1>Erroe</h1>;
  }
  return (
    <>
      <div className="flex justify-between bg-[#ce367f] p-4">
        <input
          className="p-2 rounded"
          type="text"
          placeholder="Search by a Country"
          value={search}
          onChange={handleSearch}
        />
        <p className="text-2xl text-white">Weather</p>
      </div>
      <div className="bg-pink-500 py-12 px-4 justify-evenly flex items-center">
        <img src={world} width={200} alt="" />
        <h2 className="text-3xl text-white">World Weather</h2>
      </div>
      <div className="w-screen flex flex-wrap">
        {
          searchedCountry.map((country) => {
            return (
              <div key={country.name} className="w-1/3 border border-slate-300 bg-pink-600 even:bg-pink-500 ">
                <Link to={`/city/${country.name}`}>
                  <div className="p-4 h-72 flex flex-col justify-between">
                    <div className="flex justify-between">
                      {countryImages[country.name] && (
                        <img
                          src={countryImages[country.name]}
                          alt={country.name}
                          width={120}
                        />
                      )}
                      <img className="w-8 h-min" src="https://img.icons8.com/ios/50/ffffff/circled-right.png" alt="Cloud" />
                    </div>
                    <div>
                      <h1 className="text-3xl text-white text-right">{country.name}</h1>
                      <p className="my-2 text-right text-sm text-white">
                        <span>Temp </span>
                        {Math.round(country.main.temp)}
                        {' '}
                        °C
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Weather;
