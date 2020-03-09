export function moveFigure(state, updateState){
  const {x, y, player, typeFigure, moveArr, status, currentY, currentX, takeInPass} = state;
  const nextPlayer = player === "white" ? 'black' : 'white';
  let arr = status.map(el => el.slice());
  const item = moveArr.find((item) => 
      item[0] === y && item[1] === x ? item : null   
  )
  const canCastling = player === "white" ? "canWhiteCastling" : "canBlackCastling";
  let updateData = {
    move: false,
    moveArr: [],
    currentX: null,
    currentY: null,
    typeFigure: '',
    takeInPass: {},
    history: [...state.history, {currentX, currentY, nextX: x, nextY: y, typeFigure}],
  }
  if(item){
    arr[y][x] = player + ' ' + typeFigure;
    arr[currentY][currentX] = 'empty';
    if(typeFigure === "pawn"){ 
      if(y === 7 || y === 0){
        updateData = {
          ...updateData,
          currentY: y,
          currentX: x,
          isChaigeFigure: true,
        }
      }
      else if(Math.abs(currentY - y) === 2){
        updateData = {
          ...updateData,
          takeInPass: {y: y, x: x },
        }
      }
      else if(x === takeInPass.x && currentY === takeInPass.y){
        arr[takeInPass.y][takeInPass.x] = 'empty';
      }
        
    }; 
    if(typeFigure === "king"){
      if(x === currentX - 2){
        arr[y][x + 1] = player + " tour";
        arr[currentY][0] = 'empty';
      } 
      else if(x === currentX + 2){
        arr[y][x - 1] = player + " tour";
        arr[currentY][7] = 'empty';
      }
      updateData[canCastling] = {right: false, left: false};
    };
    if(typeFigure === "tour"){
      if(currentX === 0){
        updateData[canCastling] = {...state[canCastling], left: false};
      }
      else if(currentX === 7){
        updateData[canCastling] = {...state[canCastling], right: false};
      }
      
    }
    updateData = {
        ...updateData,
        status: arr,
        player: nextPlayer,
    }
  }
  updateState({
      ...updateData,
  })
  
}




