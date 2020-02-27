export function moveFigure(state, updateState){
  const {x, y, player, typeFigure, moveArr, status, currentY, currentX} = state;
  const nextPlayer = player === "white" ? 'black' : 'white';
  let arr = status.slice();
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
  }
  if(item){
    arr[y][x] = player + ' ' + typeFigure;
    arr[currentY][currentX] = 'empty';
    if(typeFigure === "pawn" && (y === 7 || y === 0)){ 
        updateData = {
            ...updateData,
            currentY: y,
            currentX: x,
            isChaigeFigure: true,
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