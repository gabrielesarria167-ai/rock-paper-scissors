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

function setTotalRounds(event){
    event.preventDefault();
    totalRounds = input.value;
    formWindow.classList.toggle("hidden");
    gameWindow.classList.toggle("hidden");
}

// Total rounds selection variables

const formWindow = document.querySelector("#form");
const confirmButton = document.querySelector("#confirm-button");
const input = document.querySelector("#input");
const gameWindow = document.querySelector("#gameWindow");

let totalRounds = 0;
input.max = 9, input.min = 1, input.step = 2, input.placeholder = "1";

confirmButton.addEventListener("click", (e) => setTotalRounds(e));