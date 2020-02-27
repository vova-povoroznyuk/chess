
import { getColor, getType } from '../logic/utils';
import { figureTypes } from '../data/figureTypes';


export function choiseFigure(updateState, state){
  const {x, y, status } = state;
  let moveArr = [];
  const color = getColor(status[y][x]);
  const type = getType(status[y][x]);
  const dataF = {
    ...state, color, moveArr, 
  };
  figureTypes.forEach(el => {
      if(el.type === type){
          const figure = new el.constructor(dataF);
          figure.moveArr();
      }
  });
  updateState({
    move: true, 
    moveArr: moveArr, 
    currentX: x,
    currentY: y, 
    typeFigure: type,
  })
}