export function getPawnMoveArr(x, y, player, status, takeInPass, enemy){
  let pawnC;
  let startY;
  let maxY;
  if(player === 'white'){
    pawnC = 1;
    maxY = 7;
    startY = 1;
  }else{
    pawnC = -1;
    maxY = 0;
    startY = 6;
  }
  let moveArr = [];
  if( y !== maxY){
    if(status[y + pawnC][x] === 'empty'){
        moveArr.push([y + pawnC, x]);
        y === startY && status[y + 2*pawnC][x] === 'empty' && moveArr.push([y + 2*pawnC, x]);
    }
    if(x-1 >= 0){
      status[y + pawnC][x-1].indexOf(enemy)!== -1 && moveArr.push([y + pawnC, x-1]);
    }
    if(x + 1 < 8){
      status[y + pawnC][x+1].indexOf(enemy) !== -1 && moveArr.push([y + pawnC, x+1]);
    } 
    if(x === takeInPass.x + 1 && y === takeInPass.y){
      moveArr.push([y + pawnC, takeInPass.x])
    }
    if(x === takeInPass.x - 1 && y === takeInPass.y){
      moveArr.push([y + pawnC, takeInPass.x])
    }
  } 
  return moveArr;
}