/* eslint-disable arrow-body-style */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../Redux/weatherSlice';
import world from '../img/world.png';
// import countriesFlag, { world } from '../img';
import afghanistan from '../img/af.png';
import china from '../img/china.png';
import india from '../img/india.png';
import iran from '../img/iran.png';
import nipal from '../img/np.png';
import pakistan from '../img/pakistan.png';
import tajikistan from '../img/tj.png';

function Weather() {
  const dispatch = useDispatch();
  const { weather, status, error } = useSelector((state) => state.weather);

  const countryImages = {
    Islamabad: afghanistan,
    London: china,
    Germany: india,
    Karachi: iran,
    Peshawar: nipal,
    Multan: pakistan,
    Lahore: tajikistan,
  };

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
  console.log(weather);
  return (
    <>
      <div className="flex justify-between bg-[#ce367f] p-4">
        <input className="p-2 rounded" type="text" value="" placeholder="Enter name" />
        <p className="text-2xl text-white">Weather</p>
      </div>
      <div className="bg-pink-500 py-12 px-4 justify-evenly flex items-center">
        <img src={world} width={200} alt="" />
        <h2 className="text-3xl text-white">World Weather</h2>
      </div>
      <div className="w-screen flex flex-wrap">
        {
          weather.map((country) => {
            return (
              <div key={country.name} className="bg-pink-600 p-4 w-1/3 h-72">
                <div>
                  {countryImages[country.name] && (
                    <img
                      src={countryImages[country.name]}
                      alt={country.name}
                      width={120}
                    />
                  )}
                  <img className="absolute top-4 right-4" width={30} src="https://img.icons8.com/ios/50/ffffff/circled-right.png" alt="Cloud" />
                </div>
                <h1>{country.name}</h1>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Weather;
