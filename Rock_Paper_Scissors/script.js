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

const game = document.getElementById("game");
const resultScreen = document.getElementById("resultScreen");
const userPick = document.getElementById("userPick");
const housePick = document.getElementById("housePick");
const resultText = document.getElementById("resultText");
const playAgain = document.getElementById("playAgain");

const currentScore = document.getElementById("scoreValue");
const streakDisplay = document.getElementById("streakValue")
const music = document.getElementById('bg-music');
let result = "";
let losses = 0
let score = Number(localStorage.getItem("score")) || 0
let currentStreak = Number(localStorage.getItem("currentStreak")) || 0
let bestStreak = Number(localStorage.getItem("bestStreak")) || 0
const maxScore = 20;
let gameOver = false

function emoji(move) {
  if (move === "rock") return "✊";
  if (move === "paper") return "✋";
  if (move === "scissors") return "✌️";
}

function pickComputerMove() {
  if (music) {
    music.volume = 0.1
    music.play().catch(() => { })
  }
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove === computerMove) result = "TIE";
  else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "YOU WIN";
  } else {
    result = "YOU LOSE";
  }

  userPick.innerText = emoji(playerMove);
  housePick.innerText = emoji(computerMove);

  resultText.innerText = result;

  game.style.display = "none";

  resultScreen.classList.remove("hidden");
  resultScreen.classList.remove("result-rock", "result-paper", "result-scissors");
  resultScreen.classList.add(`result-${playerMove}`);

  if (result === "YOU WIN") {
    score += 1;
    currentStreak++

    if (currentStreak > bestStreak) {
      bestStreak = currentStreak
    }
  } else if (result === "YOU LOSE") {
    losses++
    currentStreak = 0
  }

  localStorage.setItem("score", score)
  localStorage.setItem("currentStreak", currentStreak)
  localStorage.setItem("bestStreak", bestStreak)

  console.log(computerMove);

  updateScore();

  if (score >= maxScore) {
    resultText.innerText = "YOU WON THE GAME 🎉";
    resultScreen.classList.remove("hidden");
    game.style.display = "none";
    gameOver = true
    return;
  }
}

function updateScore() {
  currentScore.innerText = score;
  streakDisplay.innerText = currentStreak;
}

[rock, paper, scissors].forEach((btn) => {
  btn.addEventListener("click", () => playGame(btn.id));
});

playAgain.addEventListener("click", () => {
  resultScreen.classList.add("hidden")
  resultScreen.classList.remove("result-rock", "result-paper", "result-scissors")
  game.style.display = "block"

  if (gameOver) {
    resetGame()
    gameOver = false
  }
})

function resetGame() {
  score = 0
  currentStreak = 0
  bestStreak = 0

  localStorage.removeItem("score")
  localStorage.removeItem("currentStreak")
  localStorage.removeItem("bestStreak")

  updateScore();
}

updateScore()