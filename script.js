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