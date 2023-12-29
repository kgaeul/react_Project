import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FastClick = () => {
  const [numbers, setNumbers] = useState([]);
  const [ScreenOrientation, setScore] = useState(0);
  const [gameOver, setGameOner] = useState(false);

  //마우스 클릭 함수
  const mouseCLick = (number) => {
    if (!gameOver && number === score + 1) {
      setScore(score + 1);
      if (score + 1 === 10) {
        setGameOner(true);
      }
    }
  };

  const fetchGame = () => {
    //새로운 번호를 생성하는 데 번호가 랜덤으로 자리에 들어갈 수 있도록 설정

    // () => Math.random() =0.5 0이 아니라 0.5를 해주면서 무작위로 정렬되도록 해주는 것 ~~
    const Newnumbers = Array.from({ length: 10 }, (_, index) => index + 1).sort(
      () => Math.random() - 0.5
    );

    //게임 재시작 할 경우 새로운 번호 생성 점수 0으로 초기화 게임 오버를 아님으로 설정
    setNumbers(Newnumbers);
    setScore(0);
    setGameOner(false);
  };
  return (
    <Container c>
      {gameOver ? (
        <div>
          <Alert varient='success'>
            <p>게임종료! 최종점수:{score}</p>
            <Button varient='primary' size='lg' block onClick={fetchGame}>
              게임 재시작
            </Button>
          </Alert>
        </div>
      ) : (
        <div>
          <p className='lead text-center'>현재 게임 점수 : {score} </p>
          <Row className='justify-content-center'>
            {numbers.map((number) => (
              <Col key={number}>
                <Button onClick={() => mouseCLick(number)}>{number}</Button>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};

export default FastClick;
