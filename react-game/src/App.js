import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberGuessingGame from './NumberGuessingGame';
import Quiz from './Quiz';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Weather from './Weather';
import TodoList from './Todolist';
import Footer from './Footer';
import Blog from './Blog';

const App = () => {
  const Home = () => (
    <div className='text-center m-5'>
      <h3>환영합니다</h3>
      <h5 className='mt-3'>이용을 원하는 서비스를 선택해주세요</h5>
    </div>
  );

  return (
    <>
      <h3 className='text-center mt-5'>Autumn's Website</h3>
      <div class='card text-center m-4 '>
        <Router>
          <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <div class='container-fluid'>
              <a class='navbar-brand' href='/'>
                Autumn
              </a>
              <button
                class='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNavDropdown'
                aria-controls='navbarNavDropdown'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarNavDropdown'>
                <ul class='navbar-nav'>
                  <li class='nav-item'>
                    <Nav.Link
                      as={Link}
                      to='/'
                      className='text-center text-dark me-5 ms-5 nav-link active '
                    >
                      Home
                    </Nav.Link>
                  </li>
                  <li class='nav-item'>
                    <Nav.Link
                      as={Link}
                      to='/TodoList'
                      className='nav-link active bg-light me-5 '
                    >
                      TodoList
                    </Nav.Link>
                  </li>
                  <li class='nav-item'>
                    <Nav.Link
                      as={Link}
                      to='/blog'
                      className='nav-link bg-light active me-5'
                    >
                      Blog
                    </Nav.Link>
                  </li>
                  <li class='nav-item'>
                    <NavDropdown className='text-dark ' title='Game'>
                      <NavDropdown.Item as={Link} to='/WeatherSearch'>
                        나라별 날씨 검색
                      </NavDropdown.Item>
                      <li>
                        <hr class='dropdown-divider' />
                      </li>
                      <NavDropdown.Item as={Link} to='/Quiz'>
                        Quiz
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                  <li class='nav-item dropdown'>
                    <NavDropdown className='text-dark ' title='Game'>
                      <NavDropdown.Item as={Link} to='/NumberGuessingGame'>
                        Number Guessing Game
                      </NavDropdown.Item>
                      <li>
                        <hr class='dropdown-divider' />
                      </li>
                      <NavDropdown.Item as={Link} to='/Quiz'>
                        Quiz
                      </NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/weather' element={<Weather />}></Route>
            <Route
              path='/NumberGuessingGame'
              element={<NumberGuessingGame />}
            ></Route>
            <Route path='/Quiz' element={<Quiz />}></Route>
            <Route path='/TodoList' element={<TodoList />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <div>
      <h2 className='text-center mt-3'>어떤 게임을 플레이하시겠습니까?</h2>
    </div>
  );
};

export default App;
