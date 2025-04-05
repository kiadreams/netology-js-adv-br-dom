export default class GameField {
  constructor(gameField) {
    this.gameField = gameField;
  }

  deleteGoblin() {
    const holeWithGoblin = this.gameField.querySelector('.goblin');
    if (holeWithGoblin != null) {
      holeWithGoblin.classList.replace('goblin', 'empty');
    }
  }

  showNextGoblin() {
    const emptyHoles = this.gameField.querySelectorAll('.empty');
    this.deleteGoblin();
    emptyHoles[this.getRandomEmptyHoleIndex(emptyHoles.length)].classList.replace('empty', 'goblin');
  }

  getRandomEmptyHoleIndex(max) {
    return Math.floor(Math.random() * max);
  }
}
