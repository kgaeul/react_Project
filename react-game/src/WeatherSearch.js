import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const API_KEY = '4edac2eabf494946a189e86050976521';

  const searchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?city=${query}&key=${API_KEY}`
      );
      setWeather(response.data.data[0]);
    } catch (error) {
      console.error(`에러발생`, error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='card m-5 px-3 py-5 text-center'>
      <h1>날씨</h1>
      <div>
        <input
          type='text'
          placeholder='도시를 입력하세요'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
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
