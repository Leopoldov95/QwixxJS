import game from "./game.mjs";

const handleScore = {
  //maym want to store all selected scores as arrays
  redScore: 0,
  yellowScore: 0,
  greenScore: 0,
  blueScore: 0,
  penaltyScore: 0,

  calcScore(score) {
    switch (score) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 3;
      case 3:
        return 6;
      case 4:
        return 10;
      case 5:
        return 15;
      case 6:
        return 21;
      case 7:
        return 28;
      case 8:
        return 36;
      case 9:
        return 45;
      case 10:
        return 55;
      case 11:
        return 66;
      case 12:
        return 78;
    }
  },

  updatehighScore(newScore, highscore) {
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
  },

  updatePenaltyScore() {
    this.penaltyScore += 5;
    document.querySelector(
      ".score-total.penalty"
    ).textContent = this.penaltyScore;
    this.updateTotalScore();
    if (this.penaltyScore >= 20) {
      game.gameOver();
    }
  },

  updateScore(colorScore, color) {
    document.querySelector(
      `.score-total.${color}`
    ).textContent = this.calcScore((this[colorScore] += 1));
    this.updateTotalScore();
  },

  updateTotalScore() {
    document.querySelector(".score-result").textContent =
      this.calcScore(this.redScore) +
      this.calcScore(this.yellowScore) +
      this.calcScore(this.greenScore) +
      this.calcScore(this.blueScore) -
      this.penaltyScore;
  },

  // rule handling
  // maybe store all selected scores in an array
  handleScoreBox(colorScore, score, color, highscore, e, rev) {
    console.log(highscore);
    if (
      e.target.className === "score-box" &&
      e.target.textContent !== "X" &&
      Number(e.target.textContent) === this.checkValidDiceSelected() &&
      ((Number(e.target.textContent) > highscore && rev === false) ||
        (Number(e.target.textContent) < highscore && rev === true)) &&
      this.checkDieColor(color)
    ) {
      // only want to run this if a valid score has been selected
      this.updatehighScore(Number(e.target.textContent), highscore);

      this.checkLockOut(colorScore, score, color, rev, e);
      e.target.textContent = "X";
      this.updateScore(colorScore, color);
    }
  },

  checkValidDiceSelected() {
    let total = 0;
    let dieNum = [];
    for (let die of document.querySelectorAll(".die")) {
      if (die.className.includes("selected")) {
        dieNum.push(Number(die.getAttribute("value")));
      }
    }
    if (dieNum.length === 2) {
      for (let i of dieNum) {
        total += i;
      }

      return total;
    }
  },

  checkDieColor(color) {
    let dieOne;
    let dieTwo;
    // run for of loop for every die
    for (let die of document.querySelectorAll(".die")) {
      if (die.classList.contains("selected")) {
        if (!dieOne) {
          dieTwo = die;
        }
        dieOne = die;
      }
    }

    if (
      dieTwo.classList.contains("die-one") &&
      dieOne.classList.contains("die-two")
    ) {
      if (game.dieRemaining === 1) {
        game.dieRemaining--;
        // run score box handler here!!!!
        game.displayRemainingDices();
        game.isTurnOver = true;

        return true;
      } else {
        return false;
      }
    } else if (
      dieTwo.classList.contains("die-one") ||
      dieTwo.classList.contains("die-two")
    ) {
      if (dieOne.classList.contains(`die-${color}`)) {
        if (game.coloredDieRemaining === 1) {
          if (game.dieRemaining === 1) {
            game.dieRemaining--;
          }
          game.coloredDieRemaining--;
          game.displayRemainingDices();
          game.isTurnOver = true;

          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  },

  checkLockOut(colorScore, score, color, rev, e) {
    if (rev === false) {
      if (Number(e.target.textContent) === 12 && score > 15) {
        e.target.nextSibling.innerHTML = "X";
        this.updateScore(colorScore, color);
        !game.lockedDieOne
          ? (game.lockedDieOne = true)
          : (game.lockedDieTwo = true);
      }
    }
    if (rev === true) {
      if (Number(e.target.textContent) === 2 && score > 15) {
        e.target.nextSibling.innerHTML = "X";
        this.updateScore(colorScore, color);
        !game.lockedDieOne
          ? (game.lockedDieOne = true)
          : (game.lockedDieTwo = true);
      }
    }
  },
};

export default handleScore;
