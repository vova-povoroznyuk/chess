
import { getType } from './utils';
import { getResultMoveArr } from './getResultMoveArr'

export function choiseFigure(updateState, state){
  const {x, y, status } = state;
  const type = getType(status[y][x]);
  const resultMoveArr = getResultMoveArr(state);
  updateState({
    move: true, 
    moveArr: resultMoveArr, 
    currentX: x,
    currentY: y, 
    typeFigure: type,
  })
}










