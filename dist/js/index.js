/* Todo Tasks */
/* 
1 - Handle bottom two rows valid score selection
2 - enable penalty box selection and handle penalty score box - FINISHED
3 - handle total score box - FINISHED
4 - handle valid dices left per turn
5 - ensure user cannot continue turn/roll again if no valid move has been achieved 
*/

//imports
import Die from "./Die.mjs";
import score from "./Score.mjs";
import game from "./game.mjs";
// game init

game.startNewGame();

// dom declarations
const rollBtn = document.querySelector(".btn-roll");
const redScoreRow = document.querySelector(".row-red");
const yellowScoreRow = document.querySelector(".row-yellow");
const greenScoreRow = document.querySelector(".row-green");
const blueScoreRow = document.querySelector(".row-blue");

// dice rolling function
function rollDice() {
  game.dieRemaining = 1;
  game.coloredDieRemaining = 1;
  game.isTurnOver = false;
  const newDie = new Die();
  setTimeout(() => {
    newDie.genDice();
  }, 500);
  newDie.roll();
  game.displayRemainingDices();
  newDie.displayValidScores();
}

// event handlers
rollBtn.addEventListener("click", () => {
  if (game.isTurnOver === true) {
    rollDice();
  }
});

////EVENT DELEGATION HANDLING ///////
//// dice selection /////////////////

function checkSelectedDie() {
  let selected = 0;
  for (let die of document.querySelectorAll(".die")) {
    if (die.className.includes("selected")) {
      selected += 1;
    }
  }
  return selected;
}

document.querySelector(".dice-row").addEventListener("click", (e) => {
  if (e.target.className.includes("die")) {
    if (checkSelectedDie() < 2 || e.target.classList.contains("selected")) {
      e.target.classList.toggle("selected");
      checkSelectedDie();
      score.checkValidDiceSelected();
    }
  }
});

/////////////////////
// Score Box handler
/////////////////////

redScoreRow.addEventListener("click", (e) => {
  score.handleScoreBox(
    "redScore",
    score.redScore,
    "red",
    game.redHigh,
    e,
    false
  );
});

yellowScoreRow.addEventListener("click", (e) => {
  score.handleScoreBox(
    "yellowScore",
    score.yellowScore,
    "yellow",
    game.yellowHigh,
    e,
    false
  );
});
greenScoreRow.addEventListener("click", (e) => {
  score.handleScoreBox(
    "greenScore",
    score.greenScore,
    "green",
    game.greenHigh,
    e,
    true
  );
});
blueScoreRow.addEventListener("click", (e) => {
  score.handleScoreBox(
    "blueScore",
    score.blueScore,
    "blue",
    game.blueHigh,
    e,
    true
  );
});

// handle penalty box
document.querySelector(".penalty-bottom").addEventListener("click", (e) => {
  if (
    e.target.className.includes("penalty-box") &&
    e.target.textContent !== "X"
  ) {
    e.target.textContent = "X";
    score.updatePenaltyScore();
    game.isTurnOver = true;
    rollDice();
  }
});
