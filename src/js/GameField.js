export default class GameField {
  #lastGoblinHoledIndex = 0;
  #holes = [];
  #countOfHoles = 4;

  constructor() {
    this.gameField = this.#createGameFields();
    document.querySelector("main").append(this.gameField);
  }

  get emptyHole() {
    let fieldIndex = 0;
    while (fieldIndex === this.#lastGoblinHoledIndex) {
      fieldIndex = Math.floor(Math.random() * this.#countOfHoles);
    }
    this.#lastGoblinHoledIndex = fieldIndex;
    return this.#holes[fieldIndex];
  }

  #createGameFields() {
    const gameField = document.createElement("div");
    gameField.classList.add("game-field");
    for (let i = 0; i < this.#countOfHoles; i++) {
      const hole = document.createElement("div");
      hole.classList.add("hole");
      gameField.append(hole);
      this.#holes.push(hole);
    }
    return gameField;
  }
}
