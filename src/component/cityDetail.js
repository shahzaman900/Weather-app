import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { selectedCrountry } from '../Redux/weatherSlice';
import afghanistan from '../img/af.png';
import china from '../img/china.png';
import india from '../img/india.png';
import iran from '../img/iran.png';
import nipal from '../img/np.png';
import pakistan from '../img/pakistan.png';
import tajikistan from '../img/tj.png';

const CityDetail = () => {
  const { cityName } = useParams();
  const country = useSelector((state) => selectedCrountry(state, cityName));

  const countryImages = {
    Afghanistan: afghanistan,
    China: china,
    Innichen: india,
    Iran: iran,
    Nepal: nipal,
    Pakistan: pakistan,
    Tajikistan: tajikistan,
  };

  return (
    <div className=" bg-black text-white text-2xl">
      {
      country && (
        <div key={country.id}>
          <div className="flex justify-between bg-pink-600 p-4">
            <Link className="flex flex-1" to="/">
              <img
                src="https://img.icons8.com/windows/32/ffffff/back.png"
                alt="forward"
              />
            </Link>
            <p className="flex flex-1">
              {country.name}
              {' '}
              Weather view
            </p>
          </div>
          <div className="bg-pink-500 py-12 px-4 justify-evenly flex items-center">
            <img src={countryImages[country.name]} width={200} alt="" />
            <div>
              <h2 className="text-3xl text-white">{country.name}</h2>
              <h2 className="text-3xl text-white">{country.weather[0].description}</h2>
            </div>
          </div>
          <hr />
          <h2 className=" bg-pink-600 py-2 px-4 first-color uppercase">City/Town Breackdown - 2023</h2>
          <div className="text-lg">
            <div className="py-5 bg-pink-500">
              <p className="flex px-5 justify-between">
                <span>Temperature: </span>
                {Math.round(country.main.temp)}
                {' '}
                °C
              </p>
            </div>
            <div className="py-5 bg-pink-600">
              <p className="flex px-5 justify-between">
                <span>Wind Speed: </span>
                {Math.round(country.wind.speed)}
                {' '}
                Km/h
              </p>
            </div>
            <div className="py-5 bg-pink-500">
              <p className="flex px-5 justify-between">
                <span>Wind degree: </span>
                {Math.round(country.wind.deg)}
                °
              </p>
            </div>
            <div className="py-5 bg-pink-600">
              <p className="flex px-5 justify-between">
                <span>Humidity: </span>
                {Math.round(country.main.humidity)}
                °
              </p>
            </div>
          </div>
        </div>
      )
    }
    </div>
  );
};

CityDetail.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityDetail;
