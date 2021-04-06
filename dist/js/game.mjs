import ScoreBox from "./CreateBoxes.mjs";
import score from "./Score.mjs";

const Game = {
  dieRemaining: 1,
  coloredDieRemaining: 1,
  isTurnOver: false,
  isGameOver: false,
  lockedDieOne: false,
  lockedDieTwo: false,
  redHigh: 0,
  yellowHigh: 0,
  greenHigh: 13,
  blueHigh: 13,
  remainingDice: document.querySelector(".helper-table"),

  startNewGame() {
    let redRow = new ScoreBox(11, document.querySelector(".append-red"), true);
    let yellowRow = new ScoreBox(
      11,
      document.querySelector(".append-yellow"),
      true
    );
    let greenRow = new ScoreBox(11, document.querySelector(".append-green"));
    let blueRow = new ScoreBox(11, document.querySelector(".append-blue"));
    this.isTurnOver = true;
    this.isGameOver = false;
  },

  displayRemainingDices() {
    this.remainingDice.innerHTML = "";
    const div = document.createElement("div");
    //div.classList.add('dice-row');
    const markup = `
            <p>Normal Dice: ${this.dieRemaining}</p>
            <p>Color Dice: ${this.coloredDieRemaining}</p>
    `;
    div.innerHTML = markup;
    this.remainingDice.appendChild(div);
  },

  checkGameOver(lockedOne, lockedTwo) {
    if (lockedOne && lockedTwo) {
      this.gameOver();
    }
  },

  gameOver() {
    this.isGameOver = true;
    document.querySelector(".dice-score").classList.add("game-over");
    document.querySelector(".dice-score").innerHTML = `
    <div>
      <h1>Game Over</h1>
      <h2>You final score is: ${
        document.querySelector(".score-result").textContent
      } </h2>
    </div>
    `;
  },
};

export default Game;
