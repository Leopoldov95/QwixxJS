/* Todo Tasks */
/* 
1 - handle dice roll animation
2 - handle dice score selection
3 - handle score box selection
4 - calulate score
5 - set rules  
*/

//imports
import die from "./die.mjs";
import score from "./handleScore.mjs";
import game from "./game.mjs";
// dom declarations
const rollBtn = document.querySelector(".btn-roll");

// event handlers
rollBtn.addEventListener("click", () => {
  setTimeout(() => {
    die.genDieNum();
  }, 500);
  die.roll();
});

for (let i of document.querySelectorAll(".die")) {
  i.addEventListener("click", function (e) {
    this.classList.toggle("selected");
  });
}

// Score Box handler
for (let i of document.querySelectorAll(".row-red ul li")) {
  i.addEventListener("click", (e) => {
    if (e.target.textContent !== "X") {
      e.target.textContent = "X";
      score.updateScore("redScore", "red");
    }
  });
}
for (let i of document.querySelectorAll(".row-yellow ul li")) {
  i.addEventListener("click", (e) => {
    if (e.target.textContent !== "X") {
      e.target.textContent = "X";
      score.updateScore("yellowScore", "yellow");
    }
  });
}
for (let i of document.querySelectorAll(".row-green ul li")) {
  i.addEventListener("click", (e) => {
    if (e.target.textContent !== "X") {
      e.target.textContent = "X";
      score.updateScore("greenScore", "green");
    }
  });
}
for (let i of document.querySelectorAll(".row-blue ul li")) {
  i.addEventListener("click", (e) => {
    if (e.target.textContent !== "X") {
      e.target.textContent = "X";
      score.updateScore("blueScore", "blue");
    }
  });
}

/* Test code goes here */
//let total = 0;
/* for (let i of document.querySelectorAll(".score-box")) {
  i.addEventListener("click", (e) => {
    e.target.innerHTML = "X";
    console.log(e.target.parentNode.parentElement.className);
    testbox();
  });
}

function testbox() {
  total = 0;
  for (let i of document.querySelectorAll(".row-red ul li")) {
    if (i.innerHTML === "X") {
      total += 1;
    }
  }
  console.log(total);
  document.querySelector(".score-total.red").textContent = score.calcScore(
    total
  );
}
 */
