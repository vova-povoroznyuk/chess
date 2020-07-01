import cloneDeep from 'clone-deep';

export function moveFigure(state){
  const {x, y, player, typeFigure, moveArr, status, currentY, currentX, takeInPass} = state;
  const nextPlayer = player === "white" ? 'black' : 'white';
  let statusClone = cloneDeep(status);
  const item = moveArr.find((item) => 
      item[0] === y && item[1] === x ? item : null   
  )
  const canCastling = player === "white" ? "canWhiteCastling" : "canBlackCastling";
  let newState = {
    move: false,
    moveArr: [],
    currentX: null,
    currentY: null,
    typeFigure: '',
    takeInPass: {},
  }
  let newStateVals = {}
  if(item){
    statusClone[y][x] = player + ' ' + typeFigure;
    statusClone[currentY][currentX] = 'empty';
    if(typeFigure === "pawn"){ 
      if(y === 7 || y === 0){
        newStateVals = {
          currentY: y,
          currentX: x,
          isChaigeFigure: true,
        }
      }
      else if(Math.abs(currentY - y) === 2){
        newStateVals = {
          takeInPass: {y: y, x: x },
        }
      }
      else if(x === takeInPass.x && currentY === takeInPass.y){
        statusClone[takeInPass.y][takeInPass.x] = 'empty';
      }
        
    }; 
    if(typeFigure === "king"){
      if(x === currentX - 2){
        statusClone[y][x + 1] = player + " tour";
        statusClone[currentY][0] = 'empty';
      } 
      else if(x === currentX + 2){
        statusClone[y][x - 1] = player + " tour";
        statusClone[currentY][7] = 'empty';
      }
      newState[canCastling] = {right: false, left: false};
    };
    if(typeFigure === "tour"){
      if(currentX === 0){
        newState[canCastling] = {...state[canCastling], left: false};
      }
      else if(currentX === 7){
        newState[canCastling] = {...state[canCastling], right: false};
      }
      
    }
    newState = {
        ...newState,
        ...newStateVals,
        status: statusClone,
        player: nextPlayer,
        history: [...state.history, {currentX, currentY, nextX: x, nextY: y, typeFigure}],
    }
  }
  return newState;
}




