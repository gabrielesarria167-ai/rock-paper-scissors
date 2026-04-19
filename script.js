function getComputerChoice() { // Function that gives the cpu a random choice between rock paper and scissors
    let choice = Math.floor(Math.random() * (4 - 1) + 1); // to set the choice, we use the Math.random() function. Explaining this part is a bit complex, dm me if you want to dig into its functionality
    switch (choice) { // the choice gets a value that variates from 1 to 3, for every possible value we set a choice
        case 1: // if choice is 1, we return 'rock'
            return "rock";
        case 2: // if choice is 2, we return 'paper'
            return "paper";
        case 3: // if choice is 3, we return 'scissors'
            return "scissors";
    }
}

function readRounds(event) {
    event.preventDefault();
    while (inputRounds.value <= 0) {
        alert("invalid!");
        inputRounds.value = '';
        inputRounds.focus();
        return;
    }
    rounds = inputRounds.value;
    choices.forEach((item) => item.classList.toggle("unactive"));
}

let rounds;
let playerChoice;
const choices = document.querySelectorAll("#choiceButtons>button");
const logList = document.querySelector("#log");
const confirm = document.querySelector("#confirm");
let inputRounds = document.querySelector("#rounds");

confirm.addEventListener("click", (e) => readRounds(e));
choices.forEach((item) => {
    item.addEventListener("click", () => playerChoice = item.id);
});

