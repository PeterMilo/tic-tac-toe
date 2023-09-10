
// Game Board
const Gameboard = (() => {
    const gameBoard = [];

    const printBoard = (itm) => {
        gameBoard.push(itm)
    }
    
    console.log(gameBoard)


    return {printBoard, gameBoard}

})();

const createGameboard = (() => {

    for (let index = 1; index < 10; index++) {
   
        const square = document.createElement('p');
        square.textContent = 'square ' + index;
        document.body.appendChild(square); // Append the <p> element to the body
        Gameboard.printBoard(square);

    }
})();

