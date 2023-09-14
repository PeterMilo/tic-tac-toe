const boardDiv = document.querySelector('#gameboard');

// Game Board
const Gameboard = (() => {
    const gameBoard = [];

    const pushSqaureToArray = (passedIndex) => {
        squareObject = {
            sqaureIndex: passedIndex,
            selected: false
        }
        gameBoard.push(squareObject);
    }
    
    
        const createGameboard = () => {
            for (let index = 1; index < 10; index++) {
                Gameboard.pushSqaureToArray(index);
            }
        };

    
    const printBoard = () => {
        gameBoard.forEach((element) => {
            console.log(element)
            const square = document.createElement('div');
            square.className = 'board-square';
            boardDiv.appendChild(square);
        })
    }



    return {printBoard, pushSqaureToArray, createGameboard}

})();




// Players
const playerController = (() => {
    
})

// Game Logic
const gameController = (() => {
    
})

Gameboard.createGameboard();
Gameboard.printBoard();