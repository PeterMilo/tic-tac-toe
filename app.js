const boardDiv = document.querySelector('#gameboard');

// Game Board
const Gameboard = (() => {
    const gameBoard = [];
    let xPosition;
    let yPosition;

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
    
    const xPositionCalculation = (indexNumber) => {
        let returnVariable = 0;

        if(indexNumber <= 3) {
            returnVariable = indexNumber;
        } else if (indexNumber <= 6) {
            returnVariable = indexNumber - 3;
        } else if (indexNumber <= 9) {
            returnVariable = indexNumber - 6
        }
        return returnVariable;
    }

    const yPositionCalculation = (indexNumber) => {
        let returnVariableY = 0;

        if(indexNumber <= 3) {
            returnVariableY = 1;
        } else if (indexNumber <= 6) {
            returnVariableY = 2;
        } else if (indexNumber <= 9) {
            returnVariableY = 3;
        }
        return returnVariableY;
    }
  
    const printBoard = () => {
        gameBoard.forEach((element) => {
            console.log(element)
            xPosition = xPositionCalculation(element.sqaureIndex);
            yPosition = yPositionCalculation(element.sqaureIndex);
            console.log(`x = ${xPosition}`);
            console.log(`y = ${yPosition}`);
            const square = document.createElement('button');
            square.setAttribute('x-position', `${xPosition}`)
            square.setAttribute('y-position', `${yPosition}`)
            square.className = 'board-square';
            boardDiv.appendChild(square);
        })
    }



    return {printBoard, pushSqaureToArray, createGameboard}

})();




// Players
const playerController = (() => {
    
// Create player objects incl name, mark (X or O, could be 0 or 1)


})

// Game Logic
const gameController = (() => {
    
// Register click and change color

    
// Change active player


// Evaluation logic



})

Gameboard.createGameboard();
Gameboard.printBoard();