import React, { useState } from 'react';

function LottoPage() {
  const [lottoNum1, setLottoNum1]: any = useState([]);
  const [lottoNum2, setLottoNum2]: any = useState([]);
  const [lottoNum3, setLottoNum3]: any = useState([]);
  const [lottoNum4, setLottoNum4]: any = useState([]);
  const [lottoNum5, setLottoNum5]: any = useState([]);
  const [lottoNum6, setLottoNum6]: any = useState([]);
  const [bonus, setBonus]: any = useState([]);
  const [html, setHtml]: any = useState('');
  const [again, setAgain]: any = useState(false); // 한번 더 를 클릭 했을때 초기화 용

  function MakeLotto() {
    const createNumArr = Array(45) // 45개의 배열 생성
      .fill(0)
      .map((v, i) => {
        return i + 1;
      });

    const randomNumArr = []; // 45개의 랜덤 숫자들을 담을 배열
    while (createNumArr.length > 0) {
      const randomNum = createNumArr.splice(
        Math.floor(Math.random() * createNumArr.length),
        1,
      )[0];
      randomNumArr.push(randomNum);
    }

    const bonus = randomNumArr.pop(); // 요소의 마지막은 보너스 점수
    const lotto = randomNumArr.slice(0, 6).sort();

    // setTimeout을 통해 1초에 하나씩 나타나게 해주었다
    setLottoNum1(lotto[0]);
    setTimeout(() => setLottoNum2(lotto[1]), 1000);
    setTimeout(() => setLottoNum3(lotto[2]), 2000);
    setTimeout(() => setLottoNum4(lotto[3]), 3000);
    setTimeout(() => setLottoNum5(lotto[4]), 4000);
    setTimeout(() => setLottoNum6(lotto[5]), 5000);
    setTimeout(() => setHtml('Bonus'), 6000);
    setTimeout(() => setBonus(bonus), 7000);
    setTimeout(() => setAgain(true), 7000);

    // for 문으로 lotto 배열을 돌면서 랜덤 숫자들을 확인 하고 그에 맞게 ball 의 배경색을 변경 해준다
    for (let i = 1, j = 0; j <= lotto.length; ++i, ++j) {
      if (1 <= lotto[j] && lotto[j] <= 10) {
        const pinkBall: any = document.getElementById(`ball-st${[i]}`);
        pinkBall.style.backgroundColor = '#ff9292';
      } else if (11 <= lotto[j] && lotto[j] <= 20) {
        const yellowBall: any = document.getElementById(`ball-st${[i]}`);
        yellowBall.style.backgroundColor = '#ffc107';
      } else if (21 <= lotto[j] && lotto[j] <= 30) {
        const purpleBall: any = document.getElementById(`ball-st${[i]}`);
        purpleBall.style.backgroundColor = '#753188';
      } else if (31 <= lotto[j] && lotto[j] <= 40) {
        const blueBall: any = document.getElementById(`ball-st${[i]}`);
        blueBall.style.backgroundColor = '#344cb7';
      } else if (lotto[j] >= 41) {
        const greenBall: any = document.getElementById(`ball-st${[i]}`);
        greenBall.style.backgroundColor = '#116530';
      }
    }
  }
  // 한번 더 를 클릭 했을 때 실행 될 함수 (setState로 값을 초기화 시켜준다 )
  const onClickAgain = () => {
    setLottoNum1([]);
    setLottoNum2([]);
    setLottoNum3([]);
    setLottoNum4([]);
    setLottoNum5([]);
    setLottoNum6([]);
    setBonus(null);
    setAgain(false);
    MakeLotto(); // 초기화 시켜준 후 다시 로또 추첨 함수를 호출 해준다
  };

  // 처음 한번만 추첨 버튼이 보이게 하고 다음 부터는 한번 더! 버튼만 보이게 하기 위해서 추첨 버튼을 클릭 하면 함수 실행 시켜서 버튼을 안보이게 none 을 해주었다
  function Lotto() {
    MakeLotto();
    const sty: any = document.querySelector('#start-click');
    sty.style.display = 'none';
  }

  return (
    <>
      <p className="Main-lotto">lotto</p>
      <span className="lotto-num" id="ball-st1">
        {lottoNum1}
      </span>
      <span className="lotto-num" id="ball-st2">
        {lottoNum2}
      </span>
      <span className="lotto-num" id="ball-st3">
        {lottoNum3}
      </span>
      <span className="lotto-num" id="ball-st4">
        {lottoNum4}
      </span>
      <span className="lotto-num" id="ball-st5">
        {lottoNum5}
      </span>
      <span className="lotto-num" id="ball-st6">
        {lottoNum6}
      </span>
      <br />
      <p>{html}</p>
      <span className="bonus-num"> {bonus} </span>
      <br />
      <button onClick={() => Lotto()} className="click-button" id="start-click">
        추첨
      </button>
      {/**  // 조건문을 사용해서 again이 true 이면서 라는 조건을 사용 해서 버튼을 보여준다  */}
      {again && (
        <button onClick={onClickAgain} className="click-button">
          한 번 더 !
        </button>
      )}
    </>
  );
}

export default LottoPage;
