import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import MovieList from './Component/Movie/MovieList';
import NumberGuessingGame from './Component/NumberGuessingGame';
import Quiz from './Component/Quiz';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Todo from './Component/Todo/TodoNoCss';
import EmogiBoard from './Component/Emoji';

function App() {
  return (
    <Router>
      <div>
        <Header />

        <div className='container mt-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movie' element={<MovieList />} />
            <Route path='/todos' element={<Todo />} />
            <Route
              path='/numberGuessingGame'
              element={<NumberGuessingGame />}
            />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/Blog' element={<Blog />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
