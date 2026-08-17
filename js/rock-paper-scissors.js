function getComputerChoice() {
    let choice = Math.random()
    if (choice <= 0.3) {
        return "Rock"
    } else if(choice > 0.3 && choice <= 0.6) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?").toLowerCase()
    if (choice === "rock") {
        return "Rock"
    } else if (choice === "paper") {
        return "Paper"
    } else if(choice === "scissors") {
        return "Scissors"
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice == "Scissors") {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        return "human"
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`You win! ${computerChoice} beats ${humanChoice}`)
        return "human"
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log(`You win! ${computerChoice} beats ${humanChoice}`)
        return "human"
    } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        return "computer"
    } else if (computerChoice === "Paper" && humanChoice === "Rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        return "computer"
    } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        return "computer"
    } else {
        console.log("It's a tie!")
        return "tie"
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0
    let winner = ""

    for (let i = 0; i < 5; i++) {
        winner = playRound(getHumanChoice(),getComputerChoice())
        if (winner === "human") {
            humanScore++
        } else if (winner === "computer") {
            computerScore++
        } else {
            computerScore++
            humanScore++
        }
    }

    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (humanScore < computerScore) {
        console.log("You lost the game!")
    } else {
        console.log("It's a tie!")
    }
}

playGame()