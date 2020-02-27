export function castling(data, canLeftCastling, canRightCastling){
  const { status, moveArr, x, y, color } = data;
    if(
      status[y][x - 1] === "empty" 
      && status[y][x - 2] === "empty"
      && status[y][0] === `${color} tour`
      && canLeftCastling
      ){
      moveArr.push([y, x - 2])
    }
    if(
      status[y][x + 1] === "empty"
      && status[y][x + 2] === "empty" 
      && status[y][7] === `${color} tour`
      && canRightCastling
      ){
      data.moveArr.push([data.y, data.x + 2])
    }
    
}