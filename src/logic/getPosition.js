import { getFigurePosition } from '../logic/getFigurePosition';


export function getPosition(el, updateData, arr = [], ){
  const { status, player } = updateData;
  let newStatus = status.map(el => el.slice());
  let figurePosition = getFigurePosition(player, el, newStatus);
  figurePosition && (newStatus[figurePosition.y][figurePosition.x] = 'empty');
  const newUpdateData = {...updateData, status: newStatus};
  if(figurePosition){
    arr.push(figurePosition);
    getPosition(el, newUpdateData, arr);
  }
  return arr;
}