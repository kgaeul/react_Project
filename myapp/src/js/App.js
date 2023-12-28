//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from '../js/Blog';


const Login=()=><div>로그인페이지</div>;
const Logout=()=><div>로그아웃하시겠습니까?<br></br><button>예</button><button>아니오</button></div>
/*
const About=()=>{
  return(
  <div>소개페이지</div>
  )
};
*/
const App = () => {
  return (
  <Router> 
      <div>
        <nav>
          <ul>
            <br></br>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">블로그</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/logout">로그아웃</Link>
            </li>
          
          </ul>
        </nav>
        <hr />
        <br></br>
        <Routes>
          <Route path='/about' element={<Blog/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App;