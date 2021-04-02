/* Todo Tasks */
/* 
1 - Handle bottom two rows valid score selection
2 - enable penalty box selection and handle penalty score box - FINISHED
3 - handle total score box - FINISHED
4 - handle valid dices left per turn
5 - ensure user cannot continue turn/roll again if no valid move has been achieved 
*/

//imports
import ScoreBox from "./ScoreBox.mjs";
import Die from "./Die.mjs";
import score from "./Score.mjs";
import game from "./Game.mjs";
// game init

game.startNewGame();
// dom declarations
const rollBtn = document.querySelector(".btn-roll");

// dice rolling function
function rollDice() {
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
  rollDice();
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
      score.checkValidScore();
    }
  }
});

/////////////////////
// Score Box handler
/////////////////////
function isValid(e) {
  for (let die of document.querySelectorAll(".die")) {
    if (die.className.includes("selected")) {
      console.log(e);
    }
  }
}
function updatehighScore(newScore, highscore) {
  switch (highscore) {
    case game.redHigh:
      game.redHigh = newScore;
      break;
    case game.yellowHigh:
      game.yellowHigh = newScore;
      break;
    case game.greenHigh:
      game.greenHigh = newScore;
      break;
    case game.blueHigh:
      game.blueHigh = newScore;
      break;
  }
}

function handleScoreBox(colorScore, color, highscore, e, rev) {
  if (
    (e.target.className === "score-box" &&
      e.target.textContent !== "X" &&
      Number(e.target.textContent) === score.checkValidScore() &&
      Number(e.target.textContent) > highscore &&
      rev === false) ||
    (highscore < Number(e.target.textContent) && rev === true)
  ) {
    // isValid(e);
    updatehighScore(Number(e.target.textContent), highscore);

    e.target.textContent = "X";
    score.updateScore(colorScore, color);
  }
}
document.querySelector(".row-red").addEventListener("click", (e) => {
  handleScoreBox("redScore", "red", game.redHigh, e, false);
});

document.querySelector(".row-yellow").addEventListener("click", (e) => {
  handleScoreBox("yellowScore", "yellow", game.yellowHigh, e, false);
});
document.querySelector(".row-green").addEventListener("click", (e) => {
  handleScoreBox("greenScore", "green", game.greenHigh, e, true);
});
document.querySelector(".row-blue").addEventListener("click", (e) => {
  handleScoreBox("blueScore", "blue", game.blueHigh, e, true);
});

document.querySelector(".penalty-bottom").addEventListener("click", (e) => {
  if (
    e.target.className.includes("penalty-box") &&
    e.target.textContent !== "X"
  ) {
    e.target.textContent = "X";
    score.updatePenaltyScore();
  }
});

////// READ!!! ///////
/* 
- forget slected handling, doesnt make sense as only one turn allowed
- on the left side, create a helper table that shows all possible valid scores for that roll/turn
- use the information on that helper table to allow the user ONLY to choose those valid score Boxes
*/
