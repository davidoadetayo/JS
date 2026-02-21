console.log(
  "%cBuilt by David Adetayo",
  `
  color: rgba(255,255,255,0.6);
  font-size:12px;
  font-family: Segoe UI, sans-serif;
  padding:4px 8px;
  border:1px solid rgba(255,255,255,0.15);
  border-radius:6px;
  background: rgba(255,255,255,0.05);
  `,
);

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const display = document.getElementById("resultDisplay");

rock.addEventListener("click", () => {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  if (computerMove == "rock") {
    result = "It's a tie";
    display.innerText = `You picked rock.\nComputer picked ${computerMove}.\n${result}`;
  } else if (computerMove == "paper") {
    result = "You lose";
    display.innerText = `You picked rock.\nComputer picked ${computerMove}.\n${result}`;
  } else if (computerMove == "scissors") {
    result = "You win";
    display.innerText = `You picked rock.\nComputer picked ${computerMove}.\n${result}`;
  }
});

paper.addEventListener("click", () => {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  if (computerMove == "rock") {
    result = "You win";
    display.innerText = `You picked paper.\nComputer picked ${computerMove}.\n${result}`;
  } else if (computerMove == "paper") {
    result = "It's a tie";
    display.innerText = `You picked paper.\nComputer picked ${computerMove}.\n${result}`;
  } else if (computerMove == "scissors") {
    result = "You lose";
    display.innerText = `You picked paper.\nComputer picked ${computerMove}.\n${result}`;
  }
});

scissors.addEventListener("click", () => {
  const randomNumber = Math.random();
  let computerMove = "";
  let result = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  if (computerMove == "rock") {
    result = "You lose";
    display.innerText = `You picked scissors.\nComputer picked ${computerMove}.\n${result}`;
  } else if (computerMove == "paper") {
    result = "You win";
    display.innerText = `You picked scissors.\nComputer picked ${computerMove}.\n${result}`;
  } else if (computerMove == "scissors") {
    result = "It's a tie";
    display.innerText = `You picked scissors.\nComputer picked ${computerMove}.\n${result}`;
  }
});
