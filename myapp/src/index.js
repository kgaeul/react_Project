import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/ImageChange';
import ObjectExample from './js/ObjectExample';
import AnimalSound from './js/Animal';
import ExampleCallback from './js/ExampleCallback';
import TimerCount from './js/TimerCount';
import PracticeTwo from './js/PracticeTwo';
import ParentComponent from './js/ParentComponent';
import Board from './js/Board';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
    {/* <Counter />
    <ToggleButton />
    <IndexExample />
    <ImageChange />
    <ObjectExample />
    <AnimalSound />
    <TimerCount />
    <ExampleCallback />
    <PracticeTwo /> */}
    {/* <ParentComponent />
    <Board /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//<React.StrictMode> react 내부s에서 잠재적인 문제가 있는 지 알아내기 위한 도구
