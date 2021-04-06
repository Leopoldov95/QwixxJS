class Die {
  constructor() {
    this.dieArr = new Array(6).fill(undefined).map((x) => this.genRandNum());
    this.dieOne = this.dieArr[0];
    this.dieTwo = this.dieArr[1];
    this.dieRed = this.dieArr[2];
    this.dieYellow = this.dieArr[3];
    this.dieGreen = this.dieArr[4];
    this.dieBlue = this.dieArr[5];

    this.faceName = ["one", "two", "three", "four", "five", "six"];
    this.diceContainer = document.querySelector(".dice-row");
    this.diceContainerGen = document.querySelector(".dice-row div");
    this.validScores = document.querySelector(".scores");
  }

  genRandNum() {
    return Math.floor(Math.random() * 6);
  }

  genDice() {
    //this.genDieNum();
    this.diceContainerGen.innerHTML = "";
    const div = document.createElement("div");
    //div.classList.add('dice-row');
    const markup = `
            <i value=${this.dieOne + 1} class="die die-one fas fa-dice-${
      this.faceName[this.dieOne]
    }"></i>
            <i value=${this.dieTwo + 1} class="die die-two fas fa-dice-${
      this.faceName[this.dieTwo]
    }"></i>
            <i value=${this.dieRed + 1} class="die die-red fas fa-dice-${
      this.faceName[this.dieRed]
    }"></i>
            <i value=${this.dieYellow + 1} class="die die-yellow fas fa-dice-${
      this.faceName[this.dieYellow]
    }"></i>
            <i value=${this.dieGreen + 1} class="die die-green fas fa-dice-${
      this.faceName[this.dieGreen]
    }"></i>
            <i value=${this.dieBlue + 1} class="die die-blue fas fa-dice-${
      this.faceName[this.dieBlue]
    }"></i>
    `;
    div.innerHTML = markup;
    this.diceContainerGen.appendChild(div);
  }

  displayValidScores() {
    this.validScores.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("scores-container");
    //console.log(one, two, red, yellow, green, blue);
    const markup = `
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieOne]}'></i> +
           <i class='fas fa-dice-${this.faceName[this.dieTwo]}'></i> = ${
      this.dieOne + 1 + this.dieTwo + 1
    }
        </div>
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieOne]}'></i> +
           <i class='fas score-red fa-dice-${
             this.faceName[this.dieRed]
           }'></i>  = <span class='score-red'>${
      this.dieOne + 1 + this.dieRed + 1
    }</span>
        </div>
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieOne]}'></i> +
           <i class='fas score-yellow fa-dice-${
             this.faceName[this.dieYellow]
           }'></i>  = <span class='score-yellow'>${
      this.dieOne + 1 + this.dieYellow + 1
    }</span>
        </div>
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieOne]}'></i> +
           <i class='fas score-green fa-dice-${
             this.faceName[this.dieGreen]
           }'></i>  = <span class='score-green'>${
      this.dieOne + 1 + this.dieGreen + 1
    }</span>
        </div>
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieOne]}'></i> +
           <i class='fas score-blue fa-dice-${
             this.faceName[this.dieBlue]
           }'></i>  = <span class='score-blue'>${
      this.dieOne + 1 + this.dieBlue + 1
    }</span>
        </div>
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieTwo]}'></i> +
           <i class='fas score-red fa-dice-${
             this.faceName[this.dieRed]
           }'></i>  = <span class='score-red'>${
      this.dieRed + 1 + this.dieTwo + 1
    }</span>
        </div>
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieTwo]}'></i> +
           <i class='fas score-yellow fa-dice-${
             this.faceName[this.dieYellow]
           }'></i>  = <span class='score-yellow'>${
      this.dieYellow + 1 + this.dieTwo + 1
    }</span>
        </div>
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieTwo]}'></i> +
           <i class='fas score-green fa-dice-${
             this.faceName[this.dieGreen]
           }'></i>  = <span class='score-green'>${
      this.dieGreen + 1 + this.dieTwo + 1
    }</span>
        </div>
        <div>
           <i class='fas fa-dice-${this.faceName[this.dieTwo]}'></i> +
           <i class='fas score-blue fa-dice-${
             this.faceName[this.dieBlue]
           }'></i>  = <span class='score-blue'>${
      this.dieBlue + 1 + this.dieTwo + 1
    }</span>
        </div>
    `;
    div.innerHTML = markup;
    this.validScores.appendChild(div);
  }

  roll() {
    for (let die of document.querySelectorAll(".die")) {
      setTimeout(() => {
        die.classList.remove("die-active");
      }, 500);

      die.classList.add("die-active");
    }
  }
}

export default Die;
