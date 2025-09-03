let humanScore = 0;
let computerScore = 0;

const getComputerChoice = function() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[parseInt(Math.random() * 3)];
}

const getHumanChoice = function() {
    let human_choice = prompt("What is your choice?");
    return human_choice;
}

const playRound = (humanChoice, computerChoice) => {
    let humanChoiceInsensitive = humanChoice.toLowerCase();

    if (humanChoiceInsensitive === computerChoice) {
        console.log("It's a tie! Play again.")
    }
    else if (humanChoiceInsensitive === "rock") {
        if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!"); 
            humanScore++;
        }
        else {
            console.log("You lose! Paper covers rock.");
            computerScore++;
        }
    }
    else if (humanChoiceInsensitive === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        }
        else {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        }
    }
    else if (humanChoiceInsensitive === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper covers rock.");
            humanScore++;
        }
        else {
            console.log("You lose! Scissors beats paper.");
            computerScore++;
        }
    }
}

const playGame = () => {
    for (let i = 0; i < 5; i++) 
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Human: " + humanScore + " Computer: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else    
        console.log("The clanker won.");
}


playGame();