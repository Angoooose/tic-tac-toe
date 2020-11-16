import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Board.css';

export default function Board(props) {
    const { board, handleClick, isPlayerTurn, isGameComplete } = props;
    const [clickableSquareClasses, setClickableSquareClasses] = useState(['', '', '', '', '', '', '', '', '']);

    useEffect(() => {
        const updatedClasses = [...clickableSquareClasses];
        board.forEach((square, i) => {
            if (isSquareClickable(i)) {
                updatedClasses[i] = 'clickable';
            } else {
                updatedClasses[i] = '';
            }
        });
        setClickableSquareClasses(updatedClasses);
    }, [board, isGameComplete]);

    function isSquareClickable(square) {
        if (board[square] === '' && isPlayerTurn && !isGameComplete) {
            return true;
        } else {
            return false;
        }
    }

    function handleSquareClick(squareId) {
        if (isPlayerTurn && isSquareClickable(squareId)) {
            handleClick(squareId);
        }
    }

    return (
        <div className="board-container raised-card">
            <table className="board">
                <tbody>
                    <tr>
                        <td className={`board-square  r1 c1 ${clickableSquareClasses[0]}`} onClick={() => handleSquareClick(0)}>{ board[0] }</td>
                        <td className={`board-square r1 c2 ${clickableSquareClasses[1]}`} onClick={() => handleSquareClick(1)}>{ board[1] }</td>
                        <td className={`board-square r1 ${clickableSquareClasses[2]}`} onClick={() => handleSquareClick(2)}>{ board[2] }</td>
                    </tr>
                    <tr>
                        <td className={`board-square r2 c1 ${clickableSquareClasses[3]}`} onClick={() => handleSquareClick(3)}>{ board[3] }</td>
                        <td className={`board-square r2 c2 ${clickableSquareClasses[4]}`} onClick={() => handleSquareClick(4)}>{ board[4] }</td>
                        <td className={`board-square r2 ${clickableSquareClasses[5]}`} onClick={() => handleSquareClick(5)}>{ board[5] }</td>
                    </tr>
                    <tr>
                        <td className={`board-square c1 ${clickableSquareClasses[6]}`} onClick={() => handleSquareClick(6)}>{ board[6] }</td>
                        <td className={`board-square c2 ${clickableSquareClasses[7]}`} onClick={() => handleSquareClick(7)}>{ board[7] }</td>
                        <td className={`board-square ${clickableSquareClasses[8]}`} onClick={() => handleSquareClick(8)}>{ board[8] }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}