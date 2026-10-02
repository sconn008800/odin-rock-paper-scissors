let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    return prompt("Select rock, paper, or scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("It's a tie! No winner.");
                    break;
                case "paper":
                    console.log("You lose!");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win!");
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win!");
                    humanScore++;
                    break;
                case "paper":
                    console.log("It's a tie! No winner.");
                    break;
                case "scissors":
                    console.log("You lose!");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose!");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win!");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("It's a tie! No winner");
                    break;
            }
            break;
    }
    console.log(`You score is ${humanScore}`);
    console.log(`Computer's score is ${computerScore}`);
}

function playGame() {
    let round = 1;

    while (round <= 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(humanSelection, computerSelection));

        round++;
    }
}
console.log(playGame());