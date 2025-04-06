export default class GameField {
  #gameField;
  #lastGoblinFieldIndex = 0;
  #holes;
  #goblin;

  constructor(gameField) {
    this.#gameField = gameField;
    this.#holes = this.#gameField.querySelectorAll(".hole");
    this.#goblin = this.#createGoblin();

    // Вариант получения персонажа из html-разметки
    // this.#goblin = document.querySelector('.goblin');
  }

  deleteGoblin() {
    this.#goblin.classList.add("hidden");

    // Тоже работает...
    // const goblinHole = this.#gameField.querySelector('.goblin');
    // console.log(goblinHole.parentElement.removeChild(goblinHole));
  }

  showGoblin() {
    let fieldIndex = this.#getRandomHoleIndex();
    while (fieldIndex === this.#lastGoblinFieldIndex) {
      fieldIndex = this.#getRandomHoleIndex();
    }
    this.#holes[fieldIndex].append(this.#goblin);
    this.#goblin.classList.remove("hidden");
    this.#lastGoblinFieldIndex = fieldIndex;
  }

  #getRandomHoleIndex() {
    return Math.floor(Math.random() * 4);
  }

  #createGoblin() {
    const goblinImg = document.createElement("img");
    goblinImg.src = "image/goblin.png";
    goblinImg.alt = "Изоображение гоблина";
    goblinImg.classList.add("goblin");
    return goblinImg;
  }
}
