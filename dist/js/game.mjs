import ScoreBox from "./Scorebox.mjs";
import score from "./Score.mjs";

const Game = {
  dieRemaining: 1,
  coloredDieRemaining: 1,
  redHigh: 0,
  yellowHigh: 0,
  greenHigh: 0,
  blueHigh: 0,
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
};

export default Game;
