import { getAttackArr } from './getAttackArr'
export function checkCastling(castlingDiraction, data, dir){
  const { status, x, y, player } = data;
  let resultStatus = status.map(el => el.slice());
    if(
      status[y][x + dir] === "empty" 
      && status[y][x + 2 * dir] === "empty"
      && castlingDiraction
    ){
      let kingPosition = {x: x + dir, y: y};
      resultStatus[y][x + dir] = `${player} king`;
      resultStatus[y][x] = 'empty';
      const canCastling = getAttackArr(kingPosition, data, resultStatus).length === 0;
      return canCastling;
    }
    return false;
}