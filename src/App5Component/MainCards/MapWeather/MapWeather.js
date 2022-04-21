import React, { useState } from 'react';
import styled from 'styled-components';
import Maps from './Map';
import Weather from './Weather';

const MapWeather = () => {
  const [location, setLocation] = useState({
    lat: 36.98694444444445,
    lng: 126.33666666666666,
  });

  return (
    <MapWeatherContent>
      <Block>
        <Maps location={location} />
      </Block>
      <Block>
        <Weather location={location} />
      </Block>
    </MapWeatherContent>
  );
};

export default MapWeather;

const MapWeatherContent = styled.div`
  display: flex;
  margin: 10px;
  width: 420px;
  height: 350px;
`;

const Block = styled.div`
  width: 50%;
  height: 100%;
`;
