import React, { useState, useEffect } from 'react';

export default function Todolist() {
  //추가
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  //수정
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  //날짜
  const [date, setDate] = useState('');

  const addTodo = () => {
    if (!todos.includes(newTodo)) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    } else {
      alert('이미 존재하는 할일 입니다.');
    }
  };

  const editStart = (index, todo) => {
    setEditingIndex(index);
    //수정을 진행할 경우 할일 목록에 있는 할일만 가져옴
    //왜냐하면 날짜는 수정하고 싶을 수 있으니 그대로 가져오지 않은 것
    setEditTodo(todo);
  };

  const saveEdit = () => {
    const updateTodos = [...todos];

    //작성일과 수정한 내용을 모두 저장하기 위해서는 배열을 이용
    //updateTodos[editingIndex] = { 수정한 내용 새로 넣어주기 때문에 값 대칭: editTodo, 처음부터 선택하게 만들예정 };
    updateTodos[editingIndex] = editTodo;
    setTodos(updateTodos);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditTodo('');
  };

  const removeEdit = (index) => {
    const deleteTodos = [...todos];
    deleteTodos.splice(index, 1);
    setTodos(deleteTodos);
  };

  return (
    <>
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
                <input
                  type='text'
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />

                <button onClick={saveEdit}>수정</button>
                <button onClick={cancelEdit}>취소</button>
              </div>
            ) : (
              <div>
                {todo}
                <button onClick={() => editStart(index, todo)}>수정하기</button>
                <button onClick={() => removeEdit(index)}>삭제하기</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
