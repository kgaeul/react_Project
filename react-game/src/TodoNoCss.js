import React, { useEffect, useState } from 'react';

export default function TodoNoCss() {
  //할일 목록
  const [todos, setTodos] = useState([]);

  //추가할 할 일
  const [newTodo, setNewTodo] = useState('');

  //할 일 갯수
  const [count, setCount] = useState(0);

  //수정할 할 일
  const [editingIndex, setEditingIndex] = useState(null); //=> 수정할 일의 번호의 최초값을 0으로 주면 0 번째 인덱스에 있는 할 일을 수정하게 되므로 최초값은 0으로 넣어준다.
  const [editTodo, setEditTodo] = useState('');

  //할일 추가 버튼 생성
  const addTodo = () => {
    if (!todos.includes(newTodo)) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
      setCount((count) => count + 1);
    } else {
      alert('이미 존재하는 할일 입니다.');
    }
  };

  //삭제
  const removeTodo = (index) => {
    const updateTodos = [...todos]; //=>할일 목록 복제
    updateTodos.splice(index, 1); //index는 자리값, 1개만 삭제
    setTodos(updateTodos); //=>변경된 내용으로 값 저장하기
    setCount((count) => count - 1);
  };

  //수정시작하기 버튼 수정내용 자리값, 수정할 내용
  const editStart = (index, todo) => {
    setEditingIndex(index);
    setEditTodo(todo);
  };

  //수정한 내용 저장하는 버튼
  const saveEdit = () => {
    const updateTodos = [...todos];
    updateTodos[editingIndex] = editTodo;
    setTodos(updateTodos);
    setEditingIndex(null);
  };

  //수정 취소하기 버튼
  const cancelEdit = () => {
    setEditingIndex(null);
    setEditTodo('');
  };

  return (
    <>
      <h2>TodoList</h2>
      <div>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
        <button onClick={addTodo}>할일 추가하기</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {editingIndex === index ? (
              <div>
                <input />
                <button onClick={saveEdit}>저장</button>
                <button onClick={cancelEdit}>수정하기 취소</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => editStart(index, todo)}>수정하기</button>
                <button onClick={() => removeTodo(index, todo)}>
                  삭제하기
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
