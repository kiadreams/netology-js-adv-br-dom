export default class Goblin {
  constructor() {
    this.goblin = this.#createGoblin();
  }

  hide() {
    this.goblin.classList.add("hidden");
  }

  showInField(field) {
    field.append(this.goblin);
    this.goblin.classList.remove("hidden");
  }

  #createGoblin() {
    const goblinImg = document.createElement("img");
    goblinImg.src = "image/goblin.png";
    goblinImg.alt = "Изоображение гоблина";
    goblinImg.classList.add("goblin");
    return goblinImg;
  }
}
