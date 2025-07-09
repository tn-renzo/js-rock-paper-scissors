// game functions
function pickRock() {
  const rockRandomNumber = Math.random();
  let rockComputerMove;
  let rockResult;

  if (rockRandomNumber < 1 / 3) {
    rockComputerMove = "Rock";
  } else if (rockRandomNumber < 2 / 3) {
    rockComputerMove = "Paper";
  } else {
    rockComputerMove = "Scissors";
  }

  if (rockComputerMove === "Rock") {
    rockResult = "Tie.";
  } else if (rockComputerMove === "Paper") {
    rockResult = "You Lose.";
  } else {
    rockResult = "You Win.";
  }

  // make output string
  document.getElementById(
    "output"
  ).innerHTML = `<span class="decoration">You</span> picked <span class="decoration">Rock</span>. The <span class="decoration">computer</span> picked <span class="decoration">${rockComputerMove}</span>. The Result is: <span class="decoration">${rockResult}</span>`; // pass the output string into the html tag with id "output"
}

function pickPaper() {
  const paperRandomNumber = Math.random();
  let paperComputerMove;
  let paperResult;

  if (paperRandomNumber < 1 / 3) {
    paperComputerMove = "Rock";
  } else if (paperRandomNumber < 2 / 3) {
    paperComputerMove = "Paper";
  } else {
    paperComputerMove = "Scissors";
  }

  if (paperComputerMove === "Rock") {
    paperResult = "You Win.";
  } else if (paperComputerMove === "Paper") {
    paperResult = "Tie.";
  } else {
    paperResult = "You Lose.";
  }

  // make output string
  document.getElementById(
    "output"
  ).innerHTML = `<span class="decoration">You</span> picked <span class="decoration">Paper</span>. The <span class="decoration">computer</span> picked <span class="decoration">${paperComputerMove}</span>. The Result is: <span class="decoration">${paperResult}</span>`; // pass the output string into the html tag with id "output"
}

function pickScissors() {
  const scissorsRandomNumber = Math.random();
  let scissorsComputerMove;
  let scissorsResult;

  if (scissorsRandomNumber < 1 / 3) {
    scissorsComputerMove = "Rock";
  } else if (scissorsRandomNumber < 2 / 3) {
    scissorsComputerMove = "Paper";
  } else {
    scissorsComputerMove = "Scissors";
  }

  if (scissorsComputerMove === "Rock") {
    scissorsResult = "You Lose.";
  } else if (scissorsComputerMove === "Paper") {
    scissorsResult = "You Win.";
  } else {
    scissorsResult = "Tie.";
  }

  // create output string
  document.getElementById(
    "output"
  ).innerHTML = `<span class="decoration">You</span> picked <span class="decoration">Scissors</span>. The <span class="decoration">computer</span> picked <span class="decoration">${scissorsComputerMove}</span>. The Result is: <span class="decoration">${scissorsResult}</span>`; // pass the output string into the html tag with id "output"
}

// theme setup and toggle
window.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.className = "dark";
  } else {
    document.body.className = "light";
  }

  const body = document.body;
  const icon = document.getElementById("themeIcon");

  if (body.classList.contains("dark")) {
    icon.src = "assets/icons/switcherLight.svg";
  } else {
    icon.src = "assets/icons/switcherDark.svg";
  }
});

// theme switcher
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark");
  body.classList.toggle("light");
}
