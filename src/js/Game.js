import Goblin from "./Goblin";
import GameField from "./GameField";

export default class Game {
  #currRound = 0;
  #goblin;
  #gameField;

  constructor(maxRound, roundTimeout) {
    this.maxRound = maxRound;
    this.#gameField = new GameField();
    this.#goblin = new Goblin();
    this.roundTimeout = roundTimeout * 1000;
  }

  startGame() {
    this.#showGoblinTimeout();
  }

  #showGoblinTimeout() {
    setTimeout(
      () => {
        this.#goblin.showInField(this.#gameField.emptyHole);
        this.#currRound++;
        this.#deleteGoblinTimeout();
      },
      (Math.random() + 0.5) * this.roundTimeout,
    );
  }

  #deleteGoblinTimeout() {
    setTimeout(() => {
      if (this.#currRound < this.maxRound) {
        this.#goblin.hide();
        this.#showGoblinTimeout();
      } else {
        this.#goblin.hide();
        alert("Игра окончена!!!");
      }
    }, this.roundTimeout);
  }
}
