import React from 'react';
import styled from 'styled-components';

const DailyManPower = ({ dailyManPower }) => {
  return (
    <DailyManPowerContent>
      <DailyManPowerName>{dailyManPower.name}</DailyManPowerName>
      <DailyManPowerCountBox>
        <DailyManPowerTotalCount>
          {dailyManPower.totalCount}명
        </DailyManPowerTotalCount>
        <DailyManPowerImage src="/images/construction-worker.png" />
      </DailyManPowerCountBox>
    </DailyManPowerContent>
  );
};

const DailyManPowerContent = styled.div`
  margin: 10px;
  width: 200px;

  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #ffffff;
`;

const DailyManPowerName = styled.div`
  margin: 10px;
`;

const DailyManPowerCountBox = styled.div`
  margin: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DailyManPowerTotalCount = styled.div``;

const DailyManPowerImage = styled.img`
  width: 35px;
`;

export default DailyManPower;
