import { getFigurePosition } from '../logic/getFigurePosition';
import cloneDeep from 'clone-deep';

export function getPosition(el, updateData, arr = [], ){
  const { status, player } = updateData;
  let statusClone = cloneDeep(status);
  let figurePosition = getFigurePosition(player, el, statusClone);
  figurePosition && (statusClone[figurePosition.y][figurePosition.x] = 'empty');
  const newUpdateData = {...updateData, status: statusClone};
  if(figurePosition){
    arr.push(figurePosition);
    // It's recursion
    getPosition(el, newUpdateData, arr);
  }
  return arr;
}