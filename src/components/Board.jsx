import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/Board.css';

function Board() {
    return (
        <html>
            <body>
                <h1 id="heading" href="#">Tic Tac Toe</h1>
            <   div className="Board">
                    <button id="square1" onClick={ () => updateSquare('square1')}></button>
                    <button id="square2" onClick={ () => updateSquare('square2')}></button>
                    <button id="square3" onClick={ () => updateSquare('square3')}></button>
                    <button id="square4" onClick={ () => updateSquare('square4')}></button>
                    <button id="square5" onClick={ () => updateSquare('square5')}></button>
                    <button id="square6" onClick={ () => updateSquare('square6')}></button>
                    <button id="square7" onClick={ () => updateSquare('square7')}></button>
                    <button id="square8" onClick={ () => updateSquare('square8')}></button>
                    <button id="square9" onClick={ () => updateSquare('square9')}></button>
                </div>
            </body>
        </html>
    );
}

function updateSquare(id) {
    ReactDOM.render('X', document.getElementById(id));
}

export default Board;