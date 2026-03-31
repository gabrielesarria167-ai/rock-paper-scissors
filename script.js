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
function getPlayerChoice() { // Function that grabs the users choice from the prompt window
    let choice = prompt("Choose one (rock, paper, scissors)", ""); // we ask the user to choose an option between r, p and s, if he doesnt write anything we read that as "" (also known as default value), syntax is prompt(optional question, default value)
    choice = choice.toLowerCase(); // we set the choice to lower case, so even if the user writes rock as 'roCk' or 'ROCK', it returns the same thing, it simply allows for more options instead of having to be strict about the input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") { // if the user writes something other that rock, paper or scissors, we re-send the prompt
        choice = prompt("Invalid choice, try again.", "");
        choice = choice.toLowerCase();
    }
    return choice; // when the choice becomes valid, we return it
}
function playRound(a, b) { // function that executes a singular round
    switch (true) { // this is a switch conditional, you put your parameters in the switch, and some cases and/or a default choice, the program checks if the parameter matches the cases, if it does then it runs the content inside those cases
        case a === b: // in this case, the switch creates a conditional like an if, which states:  if(true (<--- switch parameter) === (a === b) <--- case condition), then execute this case
            return "tie"; // returns tie if cpus choice is the same as the users choice
    
        case (a === "rock" && b === "paper"): // CONDITION: if(true === (a === "rock" && b === "paper"))
        case (a === "paper" && b === "scissors"): // ! note that i don't use breaks, this is simply because all of these conditions return the same thing, so i 'unite' them
        case (a === "scissors" && b === "rock"):
            return "lose"; // this return works for all 3 cases above

        case (a === "rock" && b !== "paper"): // CONDITION: if(true === (a === "rock" && b !== "paper"))
        case (a === "paper" && b !== "scissors"): // ! note that i don't use breaks, this is simply because all of these conditions return the same thing, so i 'unite' them
        case (a === "scissors" && b !== "rock"):
            return "win"; // this return works for all 3 cases above

        default:
            return "error"; // !! IF somehow none of these cases match, i return error. Shouldn't happen, but its just to be safe
    }
}
function setRounds(){ // function that sets the total rounds tht are going to be played in the match
    let choice = Number(prompt("How many rounds do you want to play?")); // I ask the user the total number of rounds, since the return value of a proompt is a STRING, I use Number() to make it a number
    if(choice <= 0){ // if the choice is less than or equal to 0, The program exits the prompt window, basically ends the program
        return null;
    }
    while(Number.isNaN(choice)){ // if the choice isn't a number, eg. the user in the prompt writes 'AJSABOIS' <-- not a number, the program gives choice a NUMBER value(since i had used Number()) of Nan, this checks if the choice is Nan
        choice = Number(prompt("Invalid input, try again.")); 
    }
    return choice; // if the choice is valid, we return the choice
}
function playMatch(){ // function that executes the entire match, with multiple rounds and a final score
    let roundsPlayed = 0;
    let totalRounds = setRounds(); // I set the number of total rounds to be played by calling my setRounds() function
    let userWins = 0, cpuWins = 0, ties = 0; 
    while(roundsPlayed < totalRounds){
        roundsPlayed++;
        switch (playRound(getPlayerChoice(), getComputerChoice())){ // Here I call the function playRound(), it returns a value between 'win', 'lose', or 'tie'
            case "win":
                console.log("You Won!");
                userWins++; // I increase the number of total user wins
                console.log(`SCORE: ${userWins} - ${ties} - ${cpuWins}`);
                break;
            case "lose":
                console.log("You Lost..");
                cpuWins++; // I increase the number of total cpu wins
                console.log(`SCORE: ${userWins} - ${ties} - ${cpuWins}`);
                break;
            case "tie":
                console.log("Its a tie!");
                ties++; // I increase the number of total ties
                console.log(`SCORE: ${userWins} - ${ties} - ${cpuWins}`);
                break;
        }
    }
    console.log("WINS: ", userWins);
    console.log("LOSSES: ", cpuWins);
    console.log("TIES: ", ties);
}

playMatch();