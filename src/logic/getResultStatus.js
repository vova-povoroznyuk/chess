import { getType } from '../logic/utils';

export function getResultStatus(state, kingPosition = null){
  const {x, y, status, player } = state;
  const type = getType(status[y][x]);
  let newStatus = status.map(el => el.slice());
  if(type !== 'king'){  
    newStatus[y][x] = 'empty';
    return newStatus;
  }else{
    newStatus[kingPosition.y][kingPosition.x] = `${player} king`;
    newStatus[y][x] = 'empty';
    return newStatus;
  }
}