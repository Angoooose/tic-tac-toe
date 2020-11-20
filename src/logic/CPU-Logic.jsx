import React from 'react';
import { useEffect } from 'react';

export default function CPU_Logic(props) {
    const { board, setBoard, setIsPlayerTurn, isCpuTurn, setIsCpuTurn, isGameComplete } = props;

    useEffect(() => {
        if (isCpuTurn && !isGameComplete) {
            cpuTurn();
        }
    }, [isCpuTurn]);

    function cpuTurn() {
        let selectedSquare = checkForWinningMove(board);

        if (selectedSquare || selectedSquare === 0) {
            if (Array.isArray(selectedSquare)) {
                const updatedBoard = [...board];
                if (board[selectedSquare[0]] === '') {
                    updatedBoard[selectedSquare[0]] = 'o';
                } else if (board[selectedSquare[1]] === '') {
                    updatedBoard[selectedSquare[1]] = 'o';
                } else if (board[selectedSquare[2]] === '') {
                    updatedBoard[selectedSquare[2]] = 'o';
                }
                setBoard(updatedBoard);
                setIsCpuTurn(false);
                setIsPlayerTurn(true);
            } else {
                const updatedBoard = [...board];
                updatedBoard[selectedSquare] = 'o';
                setBoard(updatedBoard);
                setIsCpuTurn(false);
                setIsPlayerTurn(true);
            }
        }
    }

    function checkForWinningMove(board) {
        let winningMove;

        if ((board[1] === 'o' && board[2] === 'o' && board[0] === '') || (board[6] === 'o' && board[3] === 'o' && board[0] === '') || (board[8] === 'o' && board[4] === 'o' && board[0] === '')) {
            winningMove = 0;
        } else if ((board[0] === 'o' && board[2] === 'o' && board[1] === '') || (board[7] === 'o' && board[4] === 'o' && board[1] === '')) {
            winningMove = 1;
        } else if ((board[0] === 'o' && board[1] === 'o' && board[2] === '') || (board[8] === 'o' && board[5] === 'o' && board[2] === '') || (board[6] === 'o' && board[4] === 'o' && board[2] === '')) {
            winningMove = 2;
        } else if ((board[4] === 'o' && board[5] === 'o' && board[3] === '') || (board[6] === 'o' && board[0] === 'o' && board[3] === '')) {
            winningMove = 3;
        } else if ((board[3] === 'o' && board[5] === 'o' && board[4] === '') || (board[7] === 'o' && board[1] === 'o' && board[4] === '') || (board[0] === 'o' && board[8] === 'o' && board[4] === '') || (board[6] === 'o' && board[2] === 'o' && board[4] === '')) {
            winningMove = 4;
        } else if ((board[3] === 'o' && board[4] === 'o' && board[5] === '') || (board[8] === 'o' && board[2] === 'o' && board[5] === '')) {
            winningMove = 5;
        } else if ((board[7] === 'o' && board[8] === 'o' && board[6] === '') || (board[0] === 'o' && board[3] === 'o' && board[6] === '') || (board[2] === 'o' && board[4] === 'o' && board[6] === '')) {
            winningMove = 6;
        } else if ((board[6] === 'o' && board[8] === 'o' && board[7] === '') || (board[1] === 'o' && board[4] === 'o' && board[7] === '')) {
            winningMove = 7;
        } else if ((board[6] === 'o' && board[7] === 'o' && board[8] === '') || (board[2] === 'o' && board[5] === 'o' && board[8] === '') || (board[0] === 'o' && board[4] === 'o' && board[8] === '')) {
            winningMove = 8;
        } else {
            return checkForDefensiveMove(board);
        }

        if (winningMove || winningMove === 0) {
            return winningMove;
        }
    }

    function checkForDefensiveMove(board) {
        let defensiveMove;

        if ((board[1] === 'x' && board[2] === 'x' && board[0] === '') || (board[6] === 'x' && board[3] === 'x' && board[0] === '') || (board[8] === 'x' && board[4] === 'x' && board[0] === '')) {
            defensiveMove = 0;
        } else if ((board[0] === 'x' && board[2] === 'x' && board[1] === '') || (board[7] === 'x' && board[4] === 'x' && board[1] === '')) {
            defensiveMove = 1;
        } else if ((board[0] === 'x' && board[1] === 'x' && board[2] === '') || (board[8] === 'x' && board[5] === 'x' && board[2] === '') || (board[6] === 'x' && board[4] === 'x' && board[2] === '')) {
            defensiveMove = 2;
        } else if ((board[4] === 'x' && board[5] === 'x' && board[3] === '') || (board[6] === 'x' && board[0] === 'x' && board[3] === '')) {
            defensiveMove = 3;
        } else if ((board[3] === 'x' && board[5] === 'x' && board[4] === '') || (board[7] === 'x' && board[1] === 'x' && board[4] === '') || (board[0] === 'x' && board[8] === 'x' && board[4] === '') || (board[6] === 'x' && board[2] === 'x' && board[4] === '')) {
            defensiveMove = 4;
        } else if ((board[3] === 'x' && board[4] === 'x' && board[5] === '') || (board[8] === 'x' && board[2] === 'x' && board[5] === '')) {
            defensiveMove = 5;
        } else if ((board[7] === 'x' && board[8] === 'x' && board[6] === '') || (board[0] === 'x' && board[3] === 'x' && board[6] === '') || (board[2] === 'x' && board[4] === 'x' && board[6] === '')) {
            defensiveMove = 6;
        } else if ((board[6] === 'x' && board[8] === 'x' && board[7] === '') || (board[1] === 'x' && board[4] === 'x' && board[7] === '')) {
            defensiveMove = 7;
        } else if ((board[6] === 'x' && board[7] === 'x' && board[8] === '') || (board[2] === 'x' && board[5] === 'x' && board[8] === '') || (board[0] === 'x' && board[4] === 'x' && board[8] === '')) {
            defensiveMove = 8;
        } else {
            return findOptimalWinPath(board);
        }

        if (defensiveMove || defensiveMove === 0) {
            return defensiveMove;
        }
    }

    function findOptimalWinPath(board) {
        let optimalWinPath;

        const r1 = [0, 1, 2];
        const r2 = [3, 4, 5];
        const r3 = [6, 7, 8];
        const c1 = [0, 3, 6];
        const c2 = [1, 4, 7];
        const c3 = [2, 5, 8];
        const diagDown = [0, 4, 8];
        const diagUp = [6, 4, 2];

        if (board[0] !== 'x' && board[1] !== 'x' && board[2] !== 'x') {
            optimalWinPath = r1;
        } else if (board[3] !== 'x' && board[4] !== 'x' && board[5] !== 'x') {
            optimalWinPath = r2;
        } else if (board[6] !== 'x' && board[7] !== 'x' && board[8] !== 'x') {
            optimalWinPath = r3;
        } else if (board[0] !== 'x' && board[3] !== 'x' && board[6] !== 'x') {
            optimalWinPath = c1;
        } else if (board[1] !== 'x' && board[4] !== 'x' && board[7] !== 'x') {
            optimalWinPath = c2;
        } else if (board[2] !== 'x' && board[5] !== 'x' && board[8] !== 'x') {
            optimalWinPath = c3;
        } else if (board[0] !== 'x' && board[4] !== 'x' && board[8] !== 'x') {
            optimalWinPath = diagDown;
        } else if (board[6] !== 'x' && board[4] !== 'x' && board[2] !=='x') {
            optimalWinPath = diagUp;
        } else {
            return randomChoice(board);
        }

        if (optimalWinPath) {
            return optimalWinPath;
        }
    }

    function randomChoice(board) {
        let randomSquare;
        while (board[randomSquare] !== '') {
            randomSquare = Math.floor(Math.random() * Math.floor(9));
            if (board[randomSquare] === '') {
                return randomSquare;
            }
        }
    }

    return null;
}