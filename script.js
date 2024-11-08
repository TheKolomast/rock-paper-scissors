// Logic

let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
  const randomNumber = Math.floor(Math.random() * 3);
  if(randomNumber === 0) {
    return 'rock';
  }
  if(randomNumber === 1) {
    return 'paper'
  }
   return 'scissors';
}


function playRound(player) {
  const computerChoice = getComputerChoice();
  if(computerChoice === player) {
    alert(`Computer chose ${computerChoice} and player chose ${player}. It's a tie!`);
    return 'tie';
  } else if (
    (computerChoice === "scissors" && player === "rock") ||
    (computerChoice === "rock" && player === "paper") ||
    (computerChoice === "paper" && player === "scissors")
  ) {
    alert(`Computer chose ${computerChoice} and player chose ${player}. Player wins round.`)    
    return playerScore++;
  } else {
    alert(`Computer chose ${computerChoice} and player chose ${player}. Computer wins round.`)
    return computerScore++;
  }   
}

function playGame () {
  let rounds = 5;
  for(let i = 0; i < rounds; i++) {
    playRound(getComputerChoice(), getPlayerChoice());
  }
  alert(`Final Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
}

// UI part 

const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");

rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));