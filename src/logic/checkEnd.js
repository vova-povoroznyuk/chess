import { getResultMoveArr } from '../logic/getResultMoveArr';
import { getPosition } from './getPosition';

export function checkEnd(updateData){
  const canMove = figures.some(el => {
    const figureArr = getPosition(el, updateData);
    if(figureArr.length > 0){
      const canMove = figureArr.some(element => {
        const resultMoveArr = getResultMoveArr({...updateData, x: element.x, y: element.y})
        return resultMoveArr.length > 0;
      })
      return canMove
    }
  })
  return !canMove;
}

const figures = [
  "king",
  "qween",
  "tour",
  "officer",
  "horse",
  "pawn",
];