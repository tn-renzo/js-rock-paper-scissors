function pickRock() {
  const rockRandomNumber = Math.random();
  let rockComputerMove = "";
  let rockResult = "";

  if (rockRandomNumber < 1 / 3) {
    rockComputerMove = "Rock";
  } else if (rockRandomNumber < 2 / 3) {
    rockComputerMove = "Paper";
  } else {
    rockComputerMove = "Scissors";
  }

  if (rockComputerMove === "Rock") {
    rockResult = "It's a Tie";
  } else if (rockComputerMove === "Paper") {
    rockResult = "You Lose";
  } else {
    rockResult = "You Win";
  }

  alert(
    `You picked Rock. The computer picked ${rockComputerMove}. ${rockResult}`
  );
}

function pickPaper() {
  const paperRandomNumber = Math.random();
  let paperComputerMove = "";
  let paperResult = "";

  if (paperRandomNumber < 1 / 3) {
    paperComputerMove = "Rock";
  } else if (paperRandomNumber < 2 / 3) {
    paperComputerMove = "Paper";
  } else {
    paperComputerMove = "Scissors";
  }

  if (paperComputerMove === "Rock") {
    paperResult = "You Win";
  } else if (paperComputerMove === "Paper") {
    paperResult = "Tie";
  } else {
    paperResult = "You Lose";
  }

  alert(
    `You picked Paper. The computer picked ${paperComputerMove}. ${paperResult}`
  );
}

function pickScissors() {
  const scissorsRandomNumber = Math.random();
  let scissorsComputerMove = "";
  let scissorsResult = "";

  if (scissorsRandomNumber < 1 / 3) {
    scissorsComputerMove = "Rock";
  } else if (scissorsRandomNumber < 2 / 3) {
    scissorsComputerMove = "Paper";
  } else {
    scissorsComputerMove = "Scissors";
  }

  if (scissorsComputerMove === "Rock") {
    scissorsResult = "You Lose";
  } else if (scissorsComputerMove === "Paper") {
    scissorsResult = "You Win";
  } else {
    scissorsResult = "Tie";
  }

  alert(
    `You picked Scissors. The computer picked ${scissorsComputerMove}. ${scissorsResult}`
  );
}
