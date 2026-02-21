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

function emoji(move) {
  if (move === "rock") return "✊";
  if (move === "paper") return "✋";
  if (move === "scissors") return "✌️";
}

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
    result = "It's a draw";
  } else if (computerMove == "paper") {
    result = "You lose";
  } else if (computerMove == "scissors") {
    result = "You win";
  }

  display.innerText = `You chose ${emoji("rock")} • Computer chose ${emoji(computerMove)}\n${result.toUpperCase()}`;
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
  } else if (computerMove == "paper") {
    result = "It's a draw";
  } else if (computerMove == "scissors") {
    result = "You lose";
  }

  display.innerText = `You chose ${emoji("paper")} • Computer chose ${emoji(computerMove)}\n${result.toUpperCase()}`;
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
  } else if (computerMove == "paper") {
    result = "You win";
  } else if (computerMove == "scissors") {
    result = "It's a draw";
  }

  display.innerText = `You chose ${emoji("scissors")} • Computer chose ${emoji(computerMove)}\n${result.toUpperCase()}`;
});
