const boardDiv = document.querySelector('#gameboard');

// Game Board
const Gameboard = (() => {
    const gameBoard = [];
    let xPosition;
    let yPosition;

    const pushSqaureToArray = (passedIndex) => {
        squareObject = {
            sqaureIndex: passedIndex,
            selected: 'place'
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
            square.setAttribute('x-position', `${xPosition}`);
            square.setAttribute('y-position', `${yPosition}`);
            square.setAttribute('index', `${element.sqaureIndex}`);
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


    const handleButtonClick = (event) => {
        const button = event.target;
        if (!button.getAttribute('clicked')) {
            // Setting the attributes of the clicked button
            button.setAttribute('clicked', 'active');
            button.setAttribute('picked-by', `${activePlayer.name}`)
            console.log(`Button at X=${button.getAttribute('x-position')}, Y=${button.getAttribute('y-position')} clicked.`);

            // Changing the value of selected to true
            const squareIndex = parseInt(button.getAttribute('index'));
            Gameboard.gameBoard[squareIndex - 1].selected = `${activePlayer.name}`;

            // Check for winner
            const winner = checkForWinner(Gameboard.gameBoard);
            if (winner) {
            console.log(`${winner} wins!`);
            }
        
            switchActivePlayer();
        }
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
    function checkForWinner(board) {
        const winningCombinations = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
          [0, 4, 8], [2, 4, 6] // Diagonals
        ];
      
        for (const combo of winningCombinations) {
          const [a, b, c] = combo;
          if (
            board[a].selected !== "place" && // Check that the winner is not "place"
            board[a].selected === board[b].selected &&
            board[a].selected === board[c].selected
          ) {
            return board[a].selected; // Return the player's name as the winner
          }
        }
      
        return null; // No winner found
      }
          
    return {readyInput}

})();



Gameboard.createGameboard();
Gameboard.printBoard();
gameController.readyInput();







