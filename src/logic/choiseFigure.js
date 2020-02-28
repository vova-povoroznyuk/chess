
import { getColor, getType } from '../logic/utils';
import { figureTypes } from '../data/figureTypes';
import { checkKingAttack } from '../logic/checkKingAttack';


export function choiseFigure(updateState, state){
  const {x, y, status, player } = state;
  let moveArr = [];
  const color = getColor(status[y][x]);
  const type = getType(status[y][x]);
  const dataF = {
    ...state, color, moveArr, 
  };
  let newStatus = null;
    if(type !== 'king'){
      newStatus = status.map(el => el.slice()); 
      newStatus[y][x] = 'empty';
    }
  const resultStatus = newStatus ? newStatus : status;
  const isKingAttack = checkKingAttack(state, resultStatus);
  figureTypes.forEach(el => {
      if(el.type === type){
          const figure = new el.constructor(dataF);
          figure.moveArr();
      }
  });
  let kingMoveArr = [];
  if(type === 'king'){
    kingMoveArr = moveArr.filter(el => {
      let newStatus = status.map(el => el.slice()); 
      newStatus[y][x] = 'empty';
      newStatus[el[0]][el[1]] = `${player} king`
      let isCheck = checkKingAttack(state, newStatus).length > 0;
      if(!isCheck){
        return el
      }
    })
  }
  let newMoveArr = null;
  const isDoubleCheck = isKingAttack.filter(e => e[2] !== 'empty').length === 2;
    if(isKingAttack.length > 0 && type !== 'king'){
      newMoveArr = isKingAttack.filter(el => 
        moveArr.find(item => 
          item[0] === el[0] && item[1] === el[1]
        )
      )
    }
  moveArr = isDoubleCheck ? [] : newMoveArr ? newMoveArr : moveArr;
  if(type === 'king'){
    moveArr = kingMoveArr;
  }
  
  updateState({
    move: true, 
    moveArr: moveArr, 
    currentX: x,
    currentY: y, 
    typeFigure: type,
  })
}




