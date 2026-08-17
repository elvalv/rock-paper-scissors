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
    return prompt("Rock, paper, or scissors?")

}

console.log(getComputerChoice())
console.log(getHumanChoice())