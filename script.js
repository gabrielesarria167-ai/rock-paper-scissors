function getComputerChoice() {
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
function getPlayerChoice() {
    let choice = prompt("Choose one (rock, paper, scissors)", "");
    choice = choice.toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice, try again.", "");
        choice = choice.toLowerCase();
    }
    return choice;
}
function playRound(a, b) {
    switch (true) {
        case a === b:
            return "tie";
    
        case (a === "rock" && b === "paper"):
        case (a === "paper" && b === "scissors"):
        case (a === "scissors" && b === "rock"):
            return "lose";

        case (a === "rock" && b !== "paper"):
        case (a === "paper" && b !== "scissors"):
        case (a === "scissors" && b !== "rock"):
            return "win";

        default:
            return "error";
    }
}
function setRounds(){
    let choice = Number(prompt("How many rounds do you want to play?"));
    if(choice <= 0){
        return null;
    }
    while(Number.isNaN(choice)){
        choice = Number(prompt("Invalid input, try again."));
    }
    return choice;
}
function playMatch(){
    let roundsPlayed = 0;
    let totalRounds = setRounds();
    let userWins = 0, cpuWins = 0, ties = 0;
    while(roundsPlayed < totalRounds){
        roundsPlayed++;
        switch (playRound(getPlayerChoice(), getComputerChoice())){
            case "win":
                console.log("You Won!");
                userWins++;
                console.log(`SCORE: ${userWins} - ${ties} - ${cpuWins}`);
                break;
            case "lose":
                console.log("You Lost..");
                cpuWins++;
                console.log(`SCORE: ${userWins} - ${ties} - ${cpuWins}`);
                break;
            case "tie":
                console.log("Its a tie!");
                ties++;
                console.log(`SCORE: ${userWins} - ${ties} - ${cpuWins}`);
                break;
        }
    }
    console.log("WINS: ", userWins);
    console.log("LOSSES: ", cpuWins);
    console.log("TIES: ", ties);
}

playMatch();