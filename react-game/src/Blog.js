import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [count, setCount] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editTodo, setEditTodo] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setCount(todos.length);
    document.title = `할일 갯수 : ${count}`;
  }, [todos, count]);

  const addTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const startEditing = (index, todo) => {
    setEditingIndex(index);
    setEditTodo(todo);
  };

  const saveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditTodo('');
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div class='card mt-5 text-center' style={{ marginBottom: '30px' }}>
              <h5 class='card-header'>방명록</h5>
              <div class='card-body'>
                <h6 class='card-title'>인삿말을 남겨주세요!</h6>
                <p class='card-text'>
                  <Form className='mb-3 text-center card-body'>
                    <input
                      type='text'
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      placeholder='할 일 추가'
                      style={{ width: '500px', height: '40px' }}
                    />

                    <Button variant='dark' className='ms-3' onClick={addTodo}>
                      추가하기
                    </Button>
                  </Form>
                  <ul style={{ listStyle: 'none' }}>
                    {todos.map((todo, index) => (
                      <li key={index} className='mb-2'>
                        {editingIndex === index ? (
                          <div className='text-center'>
                            <input
                              type='text'
                              value={editTodo}
                              onChange={(e) => setEditTodo(e.target.value)}
                            />
                            <Button
                              variant='dark'
                              className='m-3'
                              onClick={saveEdit}
                            >
                              저장
                            </Button>
                            <Button variant='light' onClick={cancelEdit}>
                              취소
                            </Button>
                          </div>
                        ) : (
                          <div className='text-center'>
                            {todo}
                            <Button
                              className='ml-2 m-2'
                              variant='dark'
                              onClick={() => startEditing(index, todo)}
                            >
                              수정하기
                            </Button>
                            <Button
                              className='ml-2'
                              variant='light'
                              onClick={() => removeTodo(index)}
                            >
                              삭제하기
                            </Button>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </p>
                <a href='./' class='btn btn-primary'>
                  Go Main
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
