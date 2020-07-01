import { horseDiraction } from '../data/moveDirections';
export function getHorseMoveArr( x, y, status, enemy){ 
  let moveArr = [];
  horseDiraction.forEach(el => {
    const newY = y + el[0];
    const newX = x + el[1];
    if(newY < 8 && newY >= 0 && newX < 8 && newX >= 0){
      status[newY][newX] === 'empty' &&  moveArr.push([newY, newX]);
      status[newY][newX].indexOf(enemy)!== -1 && moveArr.push([newY, newX]);
    }
  })
  return moveArr;
}