import { horseDiraction } from '../data/figures';

export function checkEnemyHorse(kingPosition, state) {
  const { status, player } = state;
  const enemy = player === "white" ? "black" : "white";
  const { x, y } = kingPosition;
  let horseArr = [];
  horseDiraction.forEach(el => {
    const newY = y + el[0];
    const newX = x + el[1];
    if(newY < 8 && newY >= 0 && newX < 8 && newX >= 0 && status[newY][newX] === `${enemy} horse`){
      horseArr.push([newY, newX, status[newY][newX]])
    }
  });
  return horseArr;
}