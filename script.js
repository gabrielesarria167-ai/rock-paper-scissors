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

function readRounds(event) { // Function that sets the game rounds based on the input value
    event.preventDefault();
    while (inputRounds.value <= 0) {
        (inputRounds.value == 0)? negativeRound.textContent = "0 rounds? really?":
        (inputRounds.value >= -5)?negativeRound.textContent = "Hey, you really hate playing rock, paper, scissors huh...":
        (inputRounds.value >= -10)? negativeRound.textContent ="Oh so you REALLY hate playing it...":
        (inputRounds.value >= -20)? negativeRound.textContent = "Ok ok sorry dude I didn't know you hated this game so much... ":
        negativeRound.textContent = "Just leave bro...";
        inputRounds.value = '';
        inputRounds.focus();
        return;
    }
    rounds = inputRounds.value;
    choices.forEach((item) => item.classList.toggle("unactive"));
}

function playRound(){ // function that gets called on button click, plays a round
    if(playerChoice === undefined) return;
    let computerChoice = getComputerChoice();
    switch(true){
        case playerChoice === computerChoice:
            alert("tie");
            break;
        case (playerChoice === "rock" && computerChoice === "paper"):
        case (playerChoice === "paper" && computerChoice === "scissors"):
        case (playerChoice === "scissors" && computerChoice === "rock"):
            alert("lose");
            break;
        case (playerChoice === "rock" && computerChoice !== "paper"):
        case (playerChoice === "paper" && computerChoice !== "scissors"):
        case (playerChoice === "scissors" && computerChoice !== "rock"):
            alert("win");
            break;
    }
}


let rounds;
let playerChoice;
const choices = document.querySelectorAll("#choiceButtons>button");
const logList = document.querySelector("#log");
const confirm = document.querySelector("#confirm");
let inputRounds = document.querySelector("#rounds");
let negativeRound = document.querySelector("#errorMsg");

confirm.addEventListener("click", (e) => readRounds(e)); // on click of the confirm button calls the readRounds callback fn
choices.forEach((item) => {
    item.addEventListener("click", () => {
        playerChoice = item.id; // sets the player choice based on which button he clicked
        playRound();
    }); 
});


