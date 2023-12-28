import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
  
      <header className="text-center py-5 bg-dark">
        <h2 className='text-light'>AutumnLog</h2>

      </header>

<div className='card '>
      <div className='row px-5 text-center'>
        <div className='col-md-3'>
          <p>게시판</p>
        </div>

        <div className='col-md-3'>
          <p>방명록</p>
        </div>

        <div className='col-md-3'>
          <p>사진첩</p>
        </div>

        <div className='col-md-3'>
          <p>플레이리스트</p>
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;
