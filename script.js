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