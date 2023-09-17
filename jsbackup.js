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



    return {printBoard, pushSqaureToArray, createGameboard, gameBoard}

})();




// Players
const playerController = (() => {

    // Create player objects incl name, mark (X or O, could be 0 or 1)
    function createPlayer (name, playernumber) {
        return {name, playernumber}
    }
    const playerOne = createPlayer('PlayerOne', 1)
    const playerTwo = createPlayer('PlayerTwo', 2)



    return {playerOne, playerTwo}

})();

// Game Logic
const gameController = (() => {

    // Register click and change color
    const readyInput = () => {
        const buttons = document.querySelectorAll('.board-square');
        // console.log(buttons)

    const handleButtonClick = (event) => {
        const button = event.target;
        
        if (!button.getAttribute('clicked')) {
        button.setAttribute('clicked', 'active');
        button.setAttribute('picked-by', `${activePlayer.name}`)
        console.log(`Button at X=${button.getAttribute('x-position')}, Y=${button.getAttribute('y-position')} clicked.`);
        }

        switchActivePlayer();
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    }
    


    // Change active player
    let activePlayer = playerController.playerOne;

    function switchActivePlayer () {
        activePlayer = (activePlayer === playerController.playerOne) ? playerController.playerTwo : playerController.playerOne;
        console.log(`Active player is now ${activePlayer.name}`)
    }

    // Evaluation logic


    // Add a click event listener to each button
    
    return {readyInput}

})();



Gameboard.createGameboard();
Gameboard.printBoard();
gameController.readyInput();







