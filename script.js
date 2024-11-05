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

function getPlayerChoice () {
  let playerChoice = prompt('Choose rock, paper or scissors. Play 5 rounds and get to see if you can beat THE COMPUTER').toLowerCase();
  if(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors') {
    alert('You must make a valid choice');
    return getPlayerChoice();
  }
  return playerChoice;
}


function playRound(computer, player) {
  if(computer === player) {
    alert(`Computer chose ${computer} and player chose ${player}. It's a tie!`);
    return 'tie';
  } else if (
    (computer === "scissors" && player === "rock") ||
    (computer === "rock" && player === "paper") ||
    (computer === "paper" && player === "scissors")
  ) {
    alert(`Computer chose ${computer} and player chose ${player}. Player wins round.`)    
    return playerScore++;
  } else {
    alert(`Computer chose ${computer} and player chose ${player}. Computer wins round.`)
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

playGame();