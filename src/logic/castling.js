import { getAttackArr } from './getAttackArr'
import { checkCastling } from './checkCastling'

export function castling(data, canLeftCastling, canRightCastling){
  const {x, y, status } = data;
  let moveArr = [];
  const checkIsCheck = getAttackArr({x, y}, data, status).length !== 0;
  if(!checkIsCheck){
    const checkLeft = checkCastling(canLeftCastling, data, -1);
    const checkRight = checkCastling(canRightCastling, data, 1);
    checkLeft && moveArr.push([y, x - 2]);
    checkRight && moveArr.push([y, x + 2]);
  }
  return moveArr;
}

