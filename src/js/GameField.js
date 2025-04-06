export default class GameField {
  #lastGoblinFieldIndex = 0;

  constructor(gameField) {
    this.gameField = gameField;
    this.holes = this.gameField.querySelectorAll(".hole");
  }

  deleteGoblin() {
    const holeWithGoblin = this.gameField.querySelector(".goblin");
    if (holeWithGoblin != null) {
      holeWithGoblin.classList.remove("goblin");
    }
  }

  showGoblin() {
    let fieldIndex = this.#getRandomHoleIndex();
    while (fieldIndex === this.#lastGoblinFieldIndex) {
      fieldIndex = this.#getRandomHoleIndex();
    }
    this.holes[fieldIndex].classList.add("goblin");
    this.#lastGoblinFieldIndex = fieldIndex;
  }

  #getRandomHoleIndex() {
    return Math.floor(Math.random() * 4);
  }
}
