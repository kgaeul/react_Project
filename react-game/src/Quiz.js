import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: '지금 제일 하고 싶은 것은?',
      options: ['자기', '졸기', '집가기'],
      correctAnswer: '집가기',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const AnswerButtonClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  //다시 시작하는 버튼을 누르면 점수와 퀴즈 상태 모두 처음으로 돌아가기
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  return (
    <div className='container mt-5'>
      {showScore ? (
        <div className='card px-5 py-5'>
          <div className='card-body'>
            <h2 className='card-title'>
              점수 : {score} / {questions.length}
            </h2>
            <button
              className='btn btn-outline-primary rounded-2'
              onClick={restartQuiz}
            >
              다시시작
            </button>
          </div>
        </div>
      ) : (
        <div className='card px-5 py-5'>
          <div className='card-body'>
            <h2 className='card-title'>질문 : {currentQuestion + 1}</h2>
            <p>{questions[currentQuestion].question}</p>
          </div>

          <div>
            {questions[currentQuestion].options.map((option) => (
              <button
                className='btn btn-outline-primary rounded-2 me-2'
                key={option}
                onClick={() => AnswerButtonClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
