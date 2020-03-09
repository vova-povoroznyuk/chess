import {  getType } from './utils';
import { getFigurePosition } from './getFigurePosition';
import { getAttackArr } from './getAttackArr'
import { getResultStatus } from './getResultStatus';
import { getMoveArr } from './getMoveArr';

export function getResultMoveArr(state){
  const { player, status, y, x } = state;
  let moveArr = getMoveArr(state);
  const type = getType(status[y][x]);
  if(type !== "king"){
    let resultStatus = getResultStatus(state, null);
    let kingPosition = getFigurePosition(player, 'king', resultStatus);
    let attakArr = getAttackArr(kingPosition, state, resultStatus);
    let  resultMoveArr = moveArr;
    if(attakArr.length > 0){
      resultMoveArr = moveArr.filter(el => 
        attakArr.find(item => 
          item[0] === el[0] && item[1] === el[1]
        )
      )
    }
    const isDoubleCheck = attakArr.filter(e => e[2] !== 'empty').length === 2;
    isDoubleCheck && (resultMoveArr = []);
    return resultMoveArr;
  }else{
    let resultMoveArr = moveArr.filter(el => {
      let kingPosition = {x: el[1], y: el[0]};
      let resultStatus = getResultStatus(state, kingPosition);
      const attakArr = getAttackArr(kingPosition, state, resultStatus);
      if(attakArr.length === 0){
        return el
      } 
    })
    return resultMoveArr
  }
  
}

