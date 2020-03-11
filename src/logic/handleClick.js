import { getColor } from '../logic/utils';
import { moveFigure } from '../logic/move';
import { getType } from './utils';
import { getResultMoveArr } from './getResultMoveArr'

export function handleClick(coordinates, state, updateState){
  if(!coordinates){ return };
  const coordinatesArr = coordinates.split(', ');
  const x = parseInt(coordinatesArr[0], 10);
  const y = parseInt(coordinatesArr[1], 10);
  const { move, status, moveArr, player 
   } = state;
  const currentColor = getColor(status[y][x]);
  const stateWithCoordinates = {
    x,
    y,
    ...state,
  };
  if(!state.isChaigeFigure){
    let newState = {};
    if(!move && status[y][x] === 'empty'){
      return;
    }
    else if(currentColor === player){
      const { status } = state;
      const type = getType(status[y][x]);
      const resultMoveArr = getResultMoveArr(stateWithCoordinates);
      newState = {
        move: true, 
        moveArr: resultMoveArr, 
        currentX: x,
        currentY: y, 
        typeFigure: type,
      }
    }
    else if(move && moveArr.length > 0){
      newState = moveFigure(stateWithCoordinates);
    }
    else{
      newState = {
        move: false,
        moveArr: [],
        currentX: null,
        currentY: null,
      };
    }
    updateState(newState)
  }
}


