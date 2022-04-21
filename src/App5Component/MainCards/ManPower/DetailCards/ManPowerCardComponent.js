import React from 'react';
import styled from 'styled-components';

const ManPowerCardComponent = ({ children }) => {
  return <DailyManPowerContent>{children}</DailyManPowerContent>;
};

const DailyManPowerContent = styled.div`
  margin: 10px;
  width: 43%;

  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
`;

export default ManPowerCardComponent;
