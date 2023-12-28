import React, { useState } from 'react';

const CreatePage = ({ addAction }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [general, setGenre] = useState('');
  const [date, setDate] = useState('');

  //추가했을 때 작동할 버튼에 대한 함수 생성
  const handleSubmit = (e) => {
    e.preventDefault();

    //추가한 내용 넣어주기
    const newAction = { id, title, general, date };
    addAction(newAction);

    //내용 넣어주고 나서 초기화해주고 싶다면 초기화 해주는 set 작성해주기
    setId('');
    setTitle('');
    setGenre('');
  };
  return (
    <div>
      <h2>Create Page</h2>
      <form onSubmit={handleSubmit}>
        <label>아이디 : </label>
        <input
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>

        <label>제목 : </label>
        <input
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>

        <label>내용 : </label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </form>
    </div>
  );
};
export default CreatePage;
