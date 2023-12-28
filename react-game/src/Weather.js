import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(null); //=>위도
  const [longitude, setLongitude] = useState(null); //=>경도

  const API_KEY = '4edac2eabf494946a189e86050976521';

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          //coords 현재 위치의 좌표
        },
        (error) => {
          console.error('문제가 생겼습니다.', error);
        }
      );
    } else {
      console.error('내 위치 정보를 가져올 수 없습니다.');
    }
  });

  const searchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=${API_KEY}`
      );
      setWeather(response.data.data[0]);
    } catch (error) {
      console.error(`에러발생`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      searchWeather();
    }
  }, [latitude, longitude]);

  return (
    <div className='card m-5 px-3 py-5 text-center'>
      <h6>현재 위치한 지역의 날씨</h6>
      <div>
        <button onClick={searchWeather} className='btn btn-dark ms-3'>
          날씨 검색하기
        </button>
      </div>
      {loading && <p>검색중</p>}
      {weather.city_name && (
        <div
          className='card'
          style={{
            width: '400px',
            margin: 'auto',
            marginTop: '50px',
            padding: '30px',
          }}
        >
          <h2>{weather.city_name}</h2>
          <p>온도 : {weather.temp}</p>
          <p>습도 : {weather.rh}%</p>
          <p>날씨</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
