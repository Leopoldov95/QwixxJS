class ScoreBox {
  constructor(num, element, ascending) {
    this.colorBoxes = new Array(num).fill(undefined).map((val, idx) => idx + 2);
    this.element = element;
    this.ascending = ascending;
    this.generateBoxes();
    this.score = 0
  }

  static createListItem(text) {
    const li = document.createElement("li");
    li.classList.add("score-box");
    li.textContent = text;
    return li;
  }

  static createLockBox() {
    const li = document.createElement("li");
    li.classList.add("score-box", "lock");
    li.innerHTML = '<i class="fas fa-unlock-alt"></i>';
    return li;
  }

  generateBoxes() {
    // map over totalBoxes
    if (this.ascending) {
      for (let text of this.colorBoxes) {
        this.element.appendChild(ScoreBox.createListItem(text));
      }
    } else {
      for (let text of this.colorBoxes.reverse()) {
        this.element.appendChild(ScoreBox.createListItem(text));
      }
    }

    this.element.appendChild(ScoreBox.createLockBox());
  }
}



export default ScoreBox;
