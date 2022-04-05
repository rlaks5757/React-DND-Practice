import React, { useState } from 'react';
import './Test.css';

const Test = () => {
  const [result, setResult] = useState('결과');
  const [scroe, setScroe] = useState({ first: 0, second: 0 });

  const handleScore = e => {
    const { name, value } = e.target;
    setScroe({ ...scroe, [name]: value });
  };

  const handleClick = () => {
    const { first, second } = scroe;
    const firstNum = parseInt(first);
    const secondtNum = parseInt(second);

    if (firstNum < 0 || firstNum > 100 || secondtNum < 0 || secondtNum > 100) {
      alert('뒤진다 장난 치지마라');
    } else {
      if (firstNum < 40 || secondtNum < 40) {
        setResult('불합격');
      } else if (firstNum + secondtNum >= 120) {
        setResult('합격');
      } else {
        setResult('불합격');
      }
    }
  };

  return (
    <div className="test">
      <div className="result">{result}</div>
      <div className="inputBox">
        <div className="input">
          <div>개론 :</div>
          <input type="number" name="first" onChange={handleScore} />
        </div>

        <div className="input">
          <div>민법 :</div>
          <input type="number" name="second" onChange={handleScore} />
        </div>
      </div>
      <button onClick={handleClick}>결과 보기</button>
    </div>
  );
};

export default Test;

// 공인중개사 1차 시험은 개론, 민법 2개 과목이 있습니다.
// 과목마다 100점 만점이지만 두 과목 합해서 120점 이상이면 합격시켜줍니다.
// 다만 한 과목이 40점 미만이면 과락으로 불합격됩니다.
// 과목 점수 2개를 파라미터로 입력하면 합격인지 불합격인지 여부를 콘솔창에 출력하는 함수를 만들어보십시오.

// 합격판독기에 0에서 100사이 숫자가 아닌걸 입력하면 장난치지 말라고 alert를 띄우려면 어떻게 코드짜야할까요?
