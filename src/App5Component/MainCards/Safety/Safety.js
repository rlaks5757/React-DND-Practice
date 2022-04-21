import React from 'react';
import styled from 'styled-components';
import PieChart from '../Progress/PieChart/PieChart';
import BarChart from '../Progress/PieChart/BarChart';

const Safety = () => {
  return (
    <SafetyCardBox>
      <SafetyCardTitle>안전시정조치요구서</SafetyCardTitle>
      <SafetyCardContentsBox>
        <SafetyPowerContentCard>
          <SafetyPowerContentCardTitle>총 누적</SafetyPowerContentCardTitle>
          <SafetyPowerContentCardCount>15</SafetyPowerContentCardCount>
        </SafetyPowerContentCard>
        <SafetyPowerContentCard>
          <SafetyPowerContentCardTitle>04월 현장</SafetyPowerContentCardTitle>
          <SafetyPowerContentCardCount>15</SafetyPowerContentCardCount>
        </SafetyPowerContentCard>
      </SafetyCardContentsBox>
      <SafetyCardChartBox>
        <SafetyCardChart>
          <div>위험유형</div>
          <PieChart />
        </SafetyCardChart>
        <SafetyCardChart>
          <div>04월 Top 3</div>
          <BarChart />
        </SafetyCardChart>
      </SafetyCardChartBox>
    </SafetyCardBox>
  );
};

const SafetyCardBox = styled.div`
  margin: 10px;
  width: 500px;
  height: 470px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  background-color: rgb(244, 247, 250);
`;

const SafetyCardTitle = styled.div`
  margin: 10px;
`;

const SafetyCardContentsBox = styled.div`
  display: flex;
`;

const SafetyPowerContentCard = styled.div`
  margin: 10px;
  width: 295px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.5);
`;

const SafetyPowerContentCardTitle = styled.div`
  margin: 5px auto 2px auto;
`;

const SafetyPowerContentCardCount = styled.div`
  margin: 2px auto 5px auto;
`;

const SafetyCardChartBox = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
`;

const SafetyCardChart = styled.div`
  width: 48%;
  height: 315px;
  text-align: center;
`;

export default Safety;
