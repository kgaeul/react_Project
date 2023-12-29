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

  //삭제
}
