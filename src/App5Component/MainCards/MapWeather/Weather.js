import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Weather = ({ location }) => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${apiInfo.key}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeather(data);
      });
  }, []);

  const apiInfo = {
    key: '7987bd1d6eb15110763d1874bde8ad1f',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  return (
    <WeatherContent>
      <div>위치 : {weather.name}</div>
      <div>맑음 : {}</div>
    </WeatherContent>
  );
};

const WeatherContent = styled.div`
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  background-color: rgb(244, 247, 250);
`;

export default Weather;
