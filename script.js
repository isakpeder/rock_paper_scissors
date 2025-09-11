const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset_btm = document.getElementById('reset');
const results = document.querySelector("#results");

let gameOver = false;

rock.addEventListener("click", () => {
    if (gameOver) return;
    let human_choice = 'rock';
    playRound(human_choice, getComputerChoice());
})

paper.addEventListener("click", () => {
    if (gameOver) return;
    let human_choice = 'paper';
    playRound(human_choice, getComputerChoice());
})

scissors.addEventListener("click", () => {
    if (gameOver) return;
    let human_choice = 'scissors';
    playRound(human_choice, getComputerChoice());
})

let humanScore = 0;
let computerScore = 0;
results.textContent = "Human: 0 Computer: 0";

const getComputerChoice = function() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[parseInt(Math.random() * 3)];
}

const playRound = (humanChoice, computerChoice) => {

        let humanChoiceInsensitive = humanChoice.toLowerCase();

        if (humanChoiceInsensitive === computerChoice) {
            results.textContent = "It's a tie!";
            results.textContent += " Human: " + humanScore + " Computer: " + computerScore;
        }
        else if (humanChoiceInsensitive === "rock") {
            if (computerChoice === "scissors") {
                results.textContent = "Rock beats scissors!"; 
                humanScore++;
                results.textContent += " Human: " + humanScore + " Computer: " + computerScore;
            }
            else {
                results.textContent = "Paper covers rock.";
                computerScore++;
                results.textContent += " Human: " + humanScore + " Computer: " + computerScore;
            }
        }
        else if (humanChoiceInsensitive === "scissors") {
            if (computerChoice === "rock") {
                results.textContent = "Rock beats scissors.";
                computerScore++;
                results.textContent += " Human: " + humanScore + " Computer: " + computerScore;
            }
            else {
                results.textContent = "Scissors beats paper.";
                humanScore++;
                results.textContent += " Human: " + humanScore + " Computer: " + computerScore;
            }
        }
        else if (humanChoiceInsensitive === "paper") {
            if (computerChoice === "rock") {
                results.textContent = "Paper covers rock.";
                humanScore++;
                results.textContent += " Human: " + humanScore + " Computer: " + computerScore;
            }
            else {
                results.textContent = "Scissors beats paper.";
                computerScore++;
                results.textContent += " Human: " + humanScore + " Computer: " + computerScore;
            }
        }

    // Ends game and displays message when human or computer reaches 5
    if (humanScore > 4 || computerScore > 4)
    {
        gameOver = true;  
        if (humanScore > computerScore) {
            results.textContent += " You win!";
        }
        else if (humanScore < computerScore) {  
            results.textContent += " You lose.";
        }
    }
}

// Reset both human and computer score to 0
reset_btn.addEventListener("click", () => {
    humanScore = 0; 
    computerScore = 0;
    gameOver = false;
    results.textContent = "Human: 0 Computer: 0";
})