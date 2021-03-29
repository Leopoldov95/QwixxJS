// everything related to die rolling and die number updating goes here

const dieRules = {
  diceContainer: document.querySelector(".dice-row"),
  diceContainerGen: document.querySelector(".dice-row div"),
  dieOne: undefined,
  dieTwo: undefined,
  dieRed: undefined,
  dieYellow: undefined,
  dieGreen: undefined,
  dieBlue: undefined,

  roll() {
    for (let die of document.querySelectorAll(".die")) {
      setTimeout(() => {
        die.classList.remove("die-active");
      }, 500);

      die.classList.add("die-active");
    }
  },

  genDieNum() {
    this.diceContainerGen.innerHTML = "";
    const rand = () => Math.floor(Math.random() * 6);
    let dieArr = [rand(), rand(), rand(), rand(), rand(), rand()];
    this.dieOne = dieArr[0] + 1;
    this.dieTwo = dieArr[1] + 1;
    this.dieRed = dieArr[2] + 1;
    this.dieYellow = dieArr[3] + 1;
    this.dieGreen = dieArr[4] + 1;
    this.dieBlue = dieArr[5] + 1;
    let dieNum = ["one", "two", "three", "four", "five", "six"];
    const div = document.createElement("div");
    //div.classList.add('dice-row');
    const markup = `
            <i class="die fas fa-dice-${dieNum[dieArr[0]]}"></i>
            <i class="die fas fa-dice-${dieNum[dieArr[1]]}"></i>
            <i class="die die-red fas fa-dice-${dieNum[dieArr[2]]}"></i>
            <i class="die die-yellow fas fa-dice-${dieNum[dieArr[3]]}"></i>
            <i class="die die-green fas fa-dice-${dieNum[dieArr[4]]}"></i>
            <i class="die die-blue fas fa-dice-${dieNum[dieArr[5]]}"></i>
    `;
    div.innerHTML = markup;
    this.diceContainerGen.appendChild(div);
  },
};

export default dieRules;
