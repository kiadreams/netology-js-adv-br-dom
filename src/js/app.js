document.addEventListener('DOMContentLoaded', () => {
  const gameField = new GameField(document.querySelector('.game-field'));

  const showGoblinInterval = setInterval(() => {
    gameField.showNextGoblin();
  }, 2000);
});

for (let i = 0; i < 100; i++) {
  console.log(getRandomInt(3));
}
