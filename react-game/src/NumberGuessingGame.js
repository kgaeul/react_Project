import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NumberGuessingGame = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const [targetNumber, setTargetNumber] = useState(randomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');

  //작성한 숫자기록
  const [attempts, setAttempts] = useState(5);
  const [guesshistory, setGuessHistory] = useState([]);

  useEffect(() => {
    if (attempts === 0) {
      setMessage(`게임오버 정답은 ${targetNumber}입니다!!`);
      setTargetNumber(randomNumber());
      setAttempts(5);
      setGuessHistory([]);
    }
  }, [attempts, targetNumber]);

  //숫자값이 들어올 때마다 값 변경
  const inputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const inputSubmit = (event) => {
    //페이지가 다시 로딩되는 것을 방지
    event.preventDefault();

    //사용자가ㅣ 입력한 값을 숫자로 변환해주는 역할
    const guess = parseInt(userGuess, 10);

    //NaN 숫자가 아님니다
    if (isNaN(guess)) {
      setMessage('숫자가 아님니다');
    } else {
      //사용자가 작성한 숫자값을 기록하는 함수 생성
      const newGuessHistory = [...guesshistory, guess];
      setGuessHistory(newGuessHistory);

      if (guess !== targetNumber) {
        //숫자가 틀렸을 때 횟수를 차감하는 함수를 작성
        var remainAttempts = attempts - 1;
        setAttempts(remainAttempts);

        if (remainAttempts === 0) {
          setMessage(`게임오버! 정답은 ${targetNumber}입니다!!`);
          setTargetNumber(randomNumber());
          setAttempts(5);
          setGuessHistory([]);
        } else {
          setMessage(guess < targetNumber ? '⬆' : '⬇');
        }
      } else {
        setMessage(
          `정답입니다 숫자는 ${targetNumber} 입니다 ${
            5 - attempts + 1
          }번 만에 맞추셨네요!!`
        );
        setTargetNumber(randomNumber());
        setAttempts(5);
        setGuessHistory([]);
      }
      setUserGuess('');
    }
  };

  return (
    <div className='card py-5 px-5 m-5'>
      <div className='card-body'>
        <h1 className='card-title'>숫자맞추기 게임</h1>
        <p>1부터 10 사이의 숫자맞추기</p>
        <form onSubmit={inputSubmit}>
          <input
            type='number'
            value={userGuess}
            onChange={inputChange}
            placeholder='숫자를 입력해주세요'
          ></input>
          <button type='submit'>제출하기</button>
        </form>
        <div>
          <p>남은 기회 : {attempts}</p>
          <p>입력한 숫자 : {guesshistory.join(' | ')}</p>
        </div>
        {message && <div>{message}</div>}
      </div>
    </div>
  );
};

export default NumberGuessingGame;
