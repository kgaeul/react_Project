//Todo.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListPage from './ListPage';

function Todo() {
  //js로 state 상태관리
  const [actions, setAction] = useState([]);
  const deleteAction = (id) => {
    setAction(actions.filter((actions) => actions.id !== id));
  };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>List</Link>
            </li>
            <li>
              <Link to='/create'>Create</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path='/'
            element={<ListPage actions={actions} deleteAction={deleteAction} />}
          >
            메인
          </Route>
          <Route>생성</Route>
        </Routes>
      </div>
    </Router>
  );
}
export default Todo;
