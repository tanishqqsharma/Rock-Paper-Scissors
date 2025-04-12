let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "The game is draw.";
  msg.style.color = "#EFB036";
  msg.style.backgroundColor="#2d336b";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win. Your ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
    msg.style.backgroundColor = "green";
    msg.style.color = "white";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice.toUpperCase()} beats your ${userChoice.toUpperCase()}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "white";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener
    ("click",
    () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
});
