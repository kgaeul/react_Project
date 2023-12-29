import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NumberGuessingGame from './Component/NumberGuessingGame';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberGuessingGame />
  </React.StrictMode>
);

reportWebVitals();
