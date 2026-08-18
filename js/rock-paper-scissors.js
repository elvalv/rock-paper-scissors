const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const humanTextScore = document.querySelector(".human-score");
const computerTextScore = document.querySelector(".computer-score");
const message = document.querySelector(".message");

let humanScore = 0;
let computerScore = 0;

function changeScore() {
    humanTextScore.textContent = `Your score: ${humanScore}`;
    computerTextScore.textContent = `Computer Score: ${computerScore}`;
}

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.3) {
        return "Rock";
    } else if(choice > 0.3 && choice <= 0.6) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    if (choice === "rock") {
        return "Rock";
    } else if (choice === "paper") {
        return "Paper";
    } else if(choice === "scissors") {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice == "Scissors") {
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
        changeScore();
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        console.log(`You win! ${computerChoice} beats ${humanChoice}`);
        humanScore++;
        changeScore();
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        console.log(`You win! ${computerChoice} beats ${humanChoice}`);
        humanScore++;
        changeScore();
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        message.textContent = `You lose! ${humanChoice} beats ${computerChoice}.`;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        changeScore();
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        message.textContent = `You lose! ${humanChoice} beats ${computerChoice}.`;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        changeScore();
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        message.textContent = `You lose! ${humanChoice} beats ${computerChoice}.`;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        changeScore();
    } else {
        message.textContent = `It's a tie!`;
        console.log("It's a tie!");
        humanScore++;
        computerScore++;
        changeScore();
    }
}

rockButton.addEventListener("click", () => playRound("Rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("Paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("Scissors", getComputerChoice()));