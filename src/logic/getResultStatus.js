import { getType } from '../logic/utils';
import cloneDeep from 'clone-deep';

export function getResultStatus(state, kingPosition = null){
  const {x, y, status, player } = state;
  const type = getType(status[y][x]);
  let statusClone = cloneDeep(status);
  if(type !== 'king'){  
    statusClone[y][x] = 'empty';
  }else{
    statusClone[kingPosition.y][kingPosition.x] = `${player} king`;
    statusClone[y][x] = 'empty';
  }
  return statusClone;
}