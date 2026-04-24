function getComputerChoice() { // Function that gives the cpu a random choice between rock paper and scissors
    let choice = Math.floor(Math.random() * (4 - 1) + 1);
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function setTotalRounds(event) {
    event.preventDefault();
    totalRounds = input.value;
    formWindow.classList.toggle("hidden");
    gameWindow.classList.toggle("hidden");
}

function playRound(cpu, player) {
    switch (true) {
        case (cpu === player):
            return "tie";
        case (cpu === "rock" && player === "scissors"):
        case (cpu === "paper" && player === "rock"):
        case (cpu === "scissors" && player === "paper"):
            return "lose";
        default:
            return "win";

    }
}

function printRoundResult(wins, losses, ties, result){
    switch (result) {
        case "win":
            gameResult.textContent = `You won the round! Score is: ${wins} wins, ${ties} ties and ${losses} losses.`;
            return;
        case "lose":
            gameResult.textContent = `You lost this round... score is: ${wins} wins, ${ties} ties and ${losses} losses.`;
            return;
        default:
            gameResult.textContent = `You tied this round. Score is: ${wins} wins, ${ties} ties and ${losses} losses.`;
            return;
    }
}

function printMatchResult(wins, losses, ties) {
    if (wins + losses + ties === 1) {
        switch (true) {
            case (wins > losses):
                gameResult.textContent = `You won the match!`;
                return;
            case (wins < losses):
                gameResult.textContent = `You lost the match...`;
                return;
            default:
                gameResult.textContent = `Its a tie!`;
                return;
        }
    }
    else {
        switch (true) {
            case (wins > losses):
                gameResult.textContent = `You won the match! The final score was: ${wins} wins, ${ties} ties and ${losses} losses.`;
                return;
            case (wins < losses):
                gameResult.textContent = `You lost the match... The final score was: ${wins} wins, ${ties} ties and ${losses} losses.`;
                return;
            default:
                gameResult.textContent = `Its a tie! The final score was: ${wins} wins, ${ties} ties and ${losses} losses.`;
                return;
        }
    }
}

function playMatch(rounds) {
    if (rounds >= 1) {
        switch (playRound(getComputerChoice(), playerChoice)) {
            case "win":
                wins++;
                printRoundResult(wins, losses, ties, "win");
                break;
            case "lose":
                losses++;
                printRoundResult(wins, losses, ties, "lose");
                break;
            default:
                ties++;
                printRoundResult(wins, losses, ties);
                break;
        }
    }
    if (rounds <= 1) printMatchResult(wins, losses, ties);
    return;
}

// Total rounds selection variables

const formWindow = document.querySelector("#form");
const confirmButton = document.querySelector("#confirm-button");
const input = document.querySelector("#input");

let totalRounds = 0;
input.max = 21, input.min = 1, input.step = 2, input.placeholder = "1";

// Match variables 

const gameWindow = document.querySelector("#gameWindow");
const gameButtons = document.querySelectorAll("#buttons > *");

let gameResult = document.querySelector("#gameResult");
let playerChoice = '';
let wins = 0, losses = 0, ties = 0;

confirmButton.addEventListener("click", (e) => setTotalRounds(e));
gameButtons.forEach((item) => {
    item.addEventListener("click", () => {
        playerChoice = item.id;
        playMatch(totalRounds);
        totalRounds--;
    });
})