import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ManPowerCardComponent from './DetailCards/ManPowerCardComponent';

const ManPowerCard = () => {
  const [dailyManPower, setDailyManPower] = useState([]);
  const [totalManPower, setTotalManPower] = useState([]);

  useEffect(() => {
    setdailyManPowerdata();
    setTotalManPowerdata();
  }, []);

  const setdailyManPowerdata = () => {
    fetch('/data/manPower/dailyManPowerData.json').then(res => {
      res.json().then(data => {
        setDailyManPower(data);
      });
    });
  };

  const setTotalManPowerdata = () => {
    fetch('/data/manPower/totalManPowerData.json').then(res => {
      res.json().then(data => {
        setTotalManPower(data);
      });
    });
  };

  return (
    <ManPowerCardBox className="manPowerCard">
      <ManPowerCardTitle>출력인원</ManPowerCardTitle>
      <ManPowerCardContentsBox>
        <ManPowerCardComponent>
          <Name>{dailyManPower.name}</Name>
          <CountBox>
            <TotalCount>{dailyManPower.totalCount}명</TotalCount>
            <Image src="/images/construction-worker.png" />
          </CountBox>
        </ManPowerCardComponent>
        <ManPowerCardComponent>
          <Name>{totalManPower.name}</Name>
          <CountBox>
            <TotalCount>{totalManPower.totalCount}명</TotalCount>
            <Image src="/images/construction-worker.png" />
          </CountBox>
        </ManPowerCardComponent>
        <ManPowerCardComponent>
          <Name>{dailyManPower.name}</Name>
          <CountBox>
            <TotalCount>{dailyManPower.totalCount}명</TotalCount>
            <Image src="/images/construction-worker.png" />
          </CountBox>
        </ManPowerCardComponent>
        <ManPowerCardComponent>
          <Name>{dailyManPower.name}</Name>
          <CountBox>
            <TotalCount>{dailyManPower.totalCount}명</TotalCount>
            <Image src="/images/construction-worker.png" />
          </CountBox>
        </ManPowerCardComponent>
        <ManPowerCardComponent>
          <Name>{dailyManPower.name}</Name>
          <CountBox>
            <TotalCount>{dailyManPower.totalCount}명</TotalCount>
            <Image src="/images/construction-worker.png" />
          </CountBox>
        </ManPowerCardComponent>
        <ManPowerCardComponent>
          <Name>{dailyManPower.name}</Name>
          <CountBox>
            <TotalCount>{dailyManPower.totalCount}명</TotalCount>
            <Image src="/images/construction-worker.png" />
          </CountBox>
        </ManPowerCardComponent>
        <ManPowerCardComponent>
          <Name>{dailyManPower.name}</Name>
          <CountBox>
            <TotalCount>{dailyManPower.totalCount}명</TotalCount>
            <Image src="/images/construction-worker.png" />
          </CountBox>
        </ManPowerCardComponent>
        <ManPowerCardComponent>
          <Name>{dailyManPower.name}</Name>
          <CountBox>
            <TotalCount>{dailyManPower.totalCount}명</TotalCount>
            <Image src="/images/construction-worker.png" />
          </CountBox>
        </ManPowerCardComponent>
      </ManPowerCardContentsBox>
    </ManPowerCardBox>
  );
};

const ManPowerCardBox = styled.div`
  margin: 10px;
  width: 320px;
  height: 470px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
  background-color: rgb(244, 247, 250);
`;

const ManPowerCardTitle = styled.div`
  margin: 10px;
`;

const ManPowerCardContentsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Name = styled.div`
  margin: 10px;
`;

const CountBox = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TotalCount = styled.div``;

const Image = styled.img`
  width: 35px;
`;

export default ManPowerCard;
