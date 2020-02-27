import { getColor } from '../logic/utils';

import { choiseFigure } from '../logic/choiseFigure';
import { moveFigure } from '../logic/move';

export function handleClick(x, y, state, updateState){
  const { move, status, moveArr, player 
   } = state;
  const currentColor = getColor(status[y][x]);
  const data = {
    x,
    y,
    ...state,
  };
  if(!state.isChaigeFigure){
    if(!move && status[y][x] === 'empty'){
      return;
    }
    else if(currentColor === player){
      choiseFigure(updateState, data);
    }
    else if(move && moveArr.length > 0){
      moveFigure(data, updateState);
    }
    else{
      updateState({
          move: false,
          moveArr: [],
          currentX: null,
          currentY: null,
      })
    }
  }
  
}