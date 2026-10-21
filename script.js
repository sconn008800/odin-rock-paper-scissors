let humanScore = 0;
let computerScore = 0;
let numberOfGames = 0;

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

const selection = document.querySelector(".rock-paper-scissors");
selection.append(rockButton, paperButton, scissorsButton);

const playerPick = document.querySelector(".player-pick");
const computerPick = document.querySelector(".computer-pick");

const gameResult = document.querySelector(".game-result");
const gamesPlayed = document.querySelector(".games-played");

const displayPlayerScore = document.querySelector(".player-score");
const displayComputerScore = document.querySelector(".computer-score");

const displayWinner = document.querySelector(".winner");

function getComputerChoice() {
    let computerNumber = Math.random() * 100;
    if (computerNumber <= 34) {
        return "rock";
    } else if (computerNumber >= 67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    playerPick.textContent = `Your choice is ${humanChoice}`;
    computerPick.textContent = `The computer's choice is ${computerChoice}`;

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    gameResult.textContent = "It's a tie! No winner.";
                    break;
                case "paper":
                    gameResult.textContent = "You lose!";
                    computerScore++;
                    break;
                case "scissors":
                    gameResult.textContent = "You win!";
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    gameResult.textContent = "You win!";
                    humanScore++;
                    break;
                case "paper":
                    gameResult.textContent = "It's a tie! No winner.";
                    break;
                case "scissors":
                    gameResult.textContent = "You lose!";
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    gameResult.textContent = "You lose!";
                    computerScore++;
                    break;
                case "paper":
                    gameResult.textContent = "You win!";
                    humanScore++;
                    break;
                case "scissors":
                    gameResult.textContent = "It's a tie! No winner";
                    break;
            }
            break;
    }
    numberOfGames++;
    gamesPlayed.textContent = `Games played: ${numberOfGames}`;

    displayPlayerScore.textContent = `You score is ${humanScore}`;
    displayComputerScore.textContent = `The computer's score is ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        declareWinner();
    }
}

function declareWinner() {
    if (humanScore == 5) {
        displayWinner.textContent = "You won 5 times. You win the game!";
    }
    if (computerScore == 5) {
        displayWinner.textContent = "The computer won 5 times. The computer won the game!";
    }
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function handleClick(e) {
    const humanChoice = e.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

rockButton.addEventListener("click", handleClick);
paperButton.addEventListener("click", handleClick);
scissorsButton.addEventListener("click", handleClick);