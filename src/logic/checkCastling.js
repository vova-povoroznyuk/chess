import { getAttackArr } from './getAttackArr';
import cloneDeep from 'clone-deep';

export function checkCastling(castlingDiraction, data, dir, tourPosition){
  const { status, x, y, player } = data;
  let resultStatus = cloneDeep(status);
    if(
      status[y][x + dir] === "empty" 
      && status[y][x + 2 * dir] === "empty"
      && castlingDiraction
      && status[y][tourPosition].indexOf('tour') !== -1
    ){
      let kingPosition = {x: x + dir, y: y};
      resultStatus[y][x + dir] = `${player} king`;
      resultStatus[y][x] = 'empty';
      const canCastling = getAttackArr(kingPosition, data, resultStatus).length === 0;
      return canCastling;
    }
    return false;
}