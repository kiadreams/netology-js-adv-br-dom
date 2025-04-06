import GameField from "./GameField";

const maxCount = 10;

document.addEventListener("DOMContentLoaded", () => {
  const gameField = new GameField(document.querySelector(".game-field"));
  let stepCount = 0;

  function showGoblinTimeout() {
    setTimeout(
      () => {
        gameField.showGoblin();
        stepCount++;
        deleteGoblinTimeout();
      },
      (Math.random() + 0.5) * 1000,
    );
  }

  function deleteGoblinTimeout() {
    setTimeout(
      () => {
        gameField.deleteGoblin();
        if (stepCount < maxCount) {
          showGoblinTimeout();
        } else {
          alert("Конец игры!!!");
        }
      },
      Math.floor(Math.random() + 1) * 500,
    );
  }

  showGoblinTimeout();
});
