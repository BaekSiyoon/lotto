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
  const [again, setAgain]: any = useState(false);

  function MakeLotto() {
    const createNumArr = Array(45)
      .fill(0)
      .map((v, i) => {
        return i + 1;
      });

    const randomNumArr = [];
    while (createNumArr.length > 0) {
      const randomNum = createNumArr.splice(
        Math.floor(Math.random() * createNumArr.length),
        1,
      )[0];
      randomNumArr.push(randomNum);
    }

    const bonus = randomNumArr.pop();
    const lotto = randomNumArr.slice(0, 6).sort();

    setLottoNum1(lotto[0]);
    setTimeout(() => setLottoNum2(lotto[1]), 1000);
    setTimeout(() => setLottoNum3(lotto[2]), 2000);
    setTimeout(() => setLottoNum4(lotto[3]), 3000);
    setTimeout(() => setLottoNum5(lotto[4]), 4000);
    setTimeout(() => setLottoNum6(lotto[5]), 5000);
    setTimeout(() => setHtml('Bonus'), 6000);
    setTimeout(() => setBonus(bonus), 7000);
    setTimeout(() => setAgain(true), 7000);

    console.log('bonus:', bonus);
    console.log('setLotto: ', lotto);
  }
  const onClickAgain = () => {
    console.log('onClickReset');
    setLottoNum1([]);
    setLottoNum2([]);
    setLottoNum3([]);
    setLottoNum4([]);
    setLottoNum5([]);
    setLottoNum6([]);

    setBonus(null);
    setAgain(false);
    MakeLotto();
  };

  function Lotto() {
    MakeLotto();
    const sty: any = document.querySelector('#start-click');
    sty.style.display = 'none';
  }

  return (
    <>
      <p className="Main-lotto">lotto</p>
      <span className="lotto-num"> {lottoNum1} </span>
      <span className="lotto-num"> {lottoNum2} </span>
      <span className="lotto-num"> {lottoNum3} </span>
      <span className="lotto-num"> {lottoNum4} </span>
      <span className="lotto-num"> {lottoNum5} </span>
      <span className="lotto-num"> {lottoNum6} </span>
      <br />
      <p>{html}</p>
      <span className="bonus-num"> {bonus} </span>
      <br />
      <button onClick={() => Lotto()} className="click-button" id="start-click">
        추첨
      </button>
      {again && (
        <button onClick={onClickAgain} className="click-button">
          한 번 더 !
        </button>
      )}
    </>
  );
}

export default LottoPage;
