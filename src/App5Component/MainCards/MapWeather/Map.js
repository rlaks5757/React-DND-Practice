import React, { useEffect } from 'react';
import {
  Map,
  MapMarker,
  ZoomControl,
  MapTypeControl,
} from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const Maps = ({ location }) => {
  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.async = true;
  //   script.src =
  //     'https://dapi.kakao.com/v2/maps/sdk.js?appkey=XXXXXXXXXXXXXXXXXXXX&autoload=false';
  //   document.head.appendChild(script);
  // }, []);

  return (
    <MapMake center={{ lat: location.lat, lng: location.lng }} level={10}>
      <MapMarker position={{ lat: location.lat, lng: location.lng }} />
      <ZoomControl />
      <MapTypeControl />
    </MapMake>
  );
};

const MapMake = styled(Map)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
`;
export default Maps;
