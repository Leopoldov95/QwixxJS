// everything related to die rolling and die number updating goes here

//Dom Selectors
const roll = document.querySelector(".btn-roll");
const dice = document.querySelectorAll(".die");
const diceContainer = document.querySelector(".dice-row");
const diceContainerGen = document.querySelector(".dice-row div");

//handle die animation
roll.addEventListener("click", () => {
  for (let die of dice) {
    setTimeout(() => {
      die.classList.add("die-active");
    }, 1);

    die.classList.remove("die-active");
  }
  genRandDie();
});

// random die generator
function genRandDie() {
  diceContainerGen.innerHTML = "";
  const rand = () => Math.floor(Math.random() * 6);
  let dieNum = ["one", "two", "three", "four", "five", "six"];
  const div = document.createElement("div");
  //div.classList.add('dice-row');
  const markup = `
          <i class="die fas fa-dice-${dieNum[rand()]}"></i>
          <i class="die fas fa-dice-${dieNum[rand()]}"></i>
          <i class="die die-red fas fa-dice-${dieNum[rand()]}"></i>
          <i class="die die-yellow fas fa-dice-${dieNum[rand()]}"></i>
          <i class="die die-green fas fa-dice-${dieNum[rand()]}"></i>
          <i class="die die-blue fas fa-dice-${dieNum[rand()]}"></i>
  `;
  div.innerHTML = markup;
  diceContainer.appendChild(div);
}

/* 
<div class="dice-row">
        
      </div>
*/
