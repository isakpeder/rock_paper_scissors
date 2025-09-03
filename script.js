const getComputerChoice = function() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[parseInt(Math.random() * 3)];
}

console.log(getComputerChoice());