const result = document.querySelector('.result');
const humanScore = document.querySelector('#human-score');
const machineScore = document.querySelector('#machine-score');

let humanPoints = 0;
let machinePoints = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissors'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR]
    const min = Math.ceil(0);
    const max = Math.floor(2);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Deu empate"    
    } else if (human === GAME_OPTIONS.ROCK && machine == GAME_OPTIONS.SCISSOR ||
        human === GAME_OPTIONS.PAPER && machine == GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.SCISSOR && machine == GAME_OPTIONS.PAPER
        ) {
        humanPoints++
        humanScore.innerHTML = humanPoints
        result.innerHTML = "Você ganhou!"
    } else {
        result.innerHTML = "Você perdeu para a Alexa!"
        machinePoints++
        machineScore.innerHTML = machinePoints
    };
}