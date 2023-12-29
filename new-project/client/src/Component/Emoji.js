//Emogi.js

import React, { useState, useEffect } from 'react';

const EmogiBoard = () => {
  const [board] = useState(generateBoard());

  function generateBoard() {
    const emogis = ['🍕', '🎉', '🎈', '🌟', '🚀', '🐱', '🌈', '🍦', '🎸'];
    const boardSize = 3;
    const suffleEmogi = emogis;
    const board = [];

    for (let i = 0; i < boardSize; i++) {
      const row = suffleEmogi.slice(i * boardSize, (i + 1) * boardSize);
      board.push(row);
    }
  }
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className=''>
          {row.map((emogi, columnIndex) => (
            <div key={columnIndex}>{emogi}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EmogiBoard;
