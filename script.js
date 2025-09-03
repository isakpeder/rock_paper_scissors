const getComputerChoice = function() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[parseInt(Math.random() * 3)];
}

const getHumanChoice = function() {
    let human_choice = prompt("What is your choice?");
    return human_choice;
}

console.log(getHumanChoice());