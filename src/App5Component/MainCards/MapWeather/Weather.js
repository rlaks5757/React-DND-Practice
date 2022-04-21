import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import WeatherToken from './WeatherToken';

const Weather = ({ location }) => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lng}&appid=${WeatherToken.key}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeather(data);
      });
  }, []);

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
