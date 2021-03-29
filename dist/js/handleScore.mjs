const handleScore = {
  redScore: 0,
  yellowScore: 0,
  greenScore: 0,
  blueScore: 0,

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

  updateScore(colorScore, color) {
    document.querySelector(
      `.score-total.${color}`
    ).textContent = this.calcScore((this[colorScore] += 1));
  },
};

export default handleScore;
