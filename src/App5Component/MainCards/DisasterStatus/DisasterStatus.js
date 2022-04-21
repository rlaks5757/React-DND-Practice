import React from 'react';
import styled from 'styled-components';
import Rechart from './Rechart';

const DisasterStatus = () => {
  return (
    <DisasterStatusContent>
      <DisasterStatusTitle>재해 현황</DisasterStatusTitle>
      <Rechart />
    </DisasterStatusContent>
  );
};

export default DisasterStatus;

const DisasterStatusContent = styled.div`
  margin: 10px;
  width: 700px;
  height: 470px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  background-color: rgb(244, 247, 250);
`;

const DisasterStatusTitle = styled.div`
  margin: 10px;
`;
