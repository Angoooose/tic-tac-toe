import { useState, useEffect } from 'react';

import Header from './Header.jsx';
import Board from './Board.jsx';
import Notification from './Notification.jsx';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [isGameRestarting, setIsGameRestarting] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  useEffect(() => {
    const winningPlayer = getIsWin();;
    if (winningPlayer !== -1) {
      setIsGameComplete(true);
      setIsPlayerTurn(false);
      if (winningPlayer === 1) {
        setWinMessage('You won the game!');
      } else {
        setWinMessage('You lost the game!');
      }
    } else if (getIsDraw() && !getIsEmpty()) {
      setIsGameComplete(true);
      setIsPlayerTurn(false);
      setWinMessage('Its a draw!');
    } else {
      if (!isPlayerTurn) {
        cpuTurn(board);
      }
    }
  }, [board]);

  useEffect(() => {
    if (isGameRestarting) {
      restartGame();
    }
  }, [isGameRestarting]);

  function restartGame() {
    setBoard(['', '', '', '', '', '', '', '', '']);
    setIsPlayerTurn(true);
    setIsGameComplete(false);
    setIsGameRestarting(false);
  }

  function handleBoardClick(squareId) {
    if (!isGameComplete) {
      const updatedBoard = [...board];
      updatedBoard[squareId] = 'x';
      setBoard(updatedBoard);
      setIsPlayerTurn(false);
    }
  }

  function cpuTurn(board) {
    let selectedSquare;

    board.forEach((square, i) => {
      if (square === '' && !selectedSquare) {
        selectedSquare = i;
      }
    });

    if (selectedSquare) {
      const updatedBoard = [...board];
      updatedBoard[selectedSquare] = 'o';
      setBoard(updatedBoard);
      setIsPlayerTurn(true);
    }
  }

  function getIsWin() {
    if (board[0] === board[1] && board[0] === board[2]) {
      if (board[0] !== '' && board[1] !== '' && board[2] !== '') return checkCell(0, board);
    } 
    if (board[3] === board[4] && board[3] === board[5]) {
      if (board[3] !== '' && board[4] !== '' && board[5] !== '') return checkCell(3, board);
    } 
    if (board[6] === board[7] && board[6] === board[8]) {
      if (board[6] !== '' && board[7] !== '' && board[8] !== '') return checkCell(6, board);
    }
    if (board[0] === board[3] && board[0] === board[6]) {
      if (board[0] !== '' && board[3] !== '' && board[6] !== '') return checkCell(0, board);
    }
    if (board[1] === board[4] && board[1] === board[7]) {
      if (board[1] !== '' && board[4] !== '' && board[7] !== '') return checkCell(1, board);
    }
    if (board[2] === board[5] && board[2] === board[8] ) {
      if (board[2] !== '' && board[5] !== '' && board[8] !== '') return checkCell(2, board);
    }
    if (board[0] === board[4] && board[0] === board[8]) {
      if (board[0] !== '' && board[4] !== '' && board[8] !== '') return checkCell(0, board);
    }
    if (board[2] === board[4] && board[2] === board[6]) {
      if (board[2] !== '' && board[4] !== '' && board[6] !== '') return checkCell(2, board);
    }

    return -1;

    function checkCell(cellNum, board) {
      if (board[cellNum] === "x") return 1;
      else return 2;
    }
  }

  function getIsDraw() {
    let isFull;
    let isFullArray = ['', '', '', '', '', '', '', '', ''];
    board.forEach((square, i) => {
      if (square !== '') {
        isFullArray[i] = true;
        if (isFullArray[0] && isFullArray[1] && isFullArray[2] && isFullArray[3] && isFullArray[4] && isFullArray[5] && isFullArray[6] && isFullArray[7] && isFullArray[8]) {
          isFull = true;
        }
      } else {
        isFull = false;
      }
    });

    if (getIsWin() === -1 && isFull) {
      return true;
    } else {
      return false;
    }
  }

  function getIsEmpty() {
    let isEmpty = true;
    board.forEach(square => {
      if (square !== '') {
        isEmpty = false;
      }
    });

    return isEmpty;
  }

  return (
    <div className="container">
      <Header />
      <Board board={board} handleClick={(squareId) => handleBoardClick(squareId)} isPlayerTurn={isPlayerTurn} isGameComplete={isGameComplete} />
      <Notification isGameComplete={isGameComplete} winMessage={winMessage} setIsGameRestarting={setIsGameRestarting} />
    </div>
  );
}

export default App;