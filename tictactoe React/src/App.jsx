import React, {useState} from 'react';
import './style.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turnO, setTurnO] = useState(true);
  const [winner, setWinner] = useState();
  const [gameOver, setGameOver] = useState(false);

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


  const disableBoxes = () => {
    setGameOver(true);
  };

  const enableBoxes = () => {
    setBoard(Array(9).fill(''));
    setGameOver(false);
  };

  const showWinner = (winnerSymbol) => {
    setWinner(winnerSymbol);
    disableBoxes();
  };

  const checkWinner = (currentBoard) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      const val1 = currentBoard[a];
      const val2 = currentBoard[b];
      const val3 = currentBoard[c];
      if (val1 !== '' && val1 === val2 && val2 === val3) {
        showWinner(val1);
        return true;
      }
    }
    return false;
  };

  const handleBoxClick = (index) => {
    if (board[index] !== '' || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = turnO ? 'O' : 'X';
    setBoard(newBoard);
    setTurnO(!turnO);

    checkWinner(newBoard);
  };

  const resetGame = () => {
    setTurnO(true);
    setWinner(null);
    enableBoxes();
  };

  const renderBox = (index) => (
    <button
      key={index}
      className="box"
      onClick={() => handleBoxClick(index)}
      disabled={board[index] !== '' || gameOver}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="App">
      {gameOver && (
        <div className="msg-container">
          <p id="msg">
            {winner === 'Draw' 
              ? "It's a Draw" 
              : `Congratulations, Winner is ${winner}`
            }
          </p>
          <button id="newGame" onClick={resetGame}>
            New Game
          </button>
        </div>
      )}
      
      <h1>Tic Tac Toe</h1>
      
      <div className="container">
        <div className="game">
          {Array(9).fill().map((_, index) => renderBox(index))}
        </div>
      </div>
      
      <button id="reset-btn" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;
