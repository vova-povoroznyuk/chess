export function checkEnemyPawn(kingPosition, state){
  const { x, y } = kingPosition;
  const { status, player } = state;
  const enemy = player === 'white' ? "black" : "white";
  let pawnArr = [];
  const pawn = [1, -1,];
  if(player === "white" &&  y + 1 < 8){
    pawn.forEach(el => {
      if(status[y + 1][x + el] === `${enemy} pawn`){
        pawnArr.push([y + 1, x + el, status[y + 1][x + el]])
      }
    })
  }
  if(player === "black" && y - 1 < 8){
    pawn.forEach(el => {
      if(status[y - 1][x + el] === `${enemy} pawn`){
        pawnArr.push([y - 1, x + el, status[y - 1][x + el]])
      }
    })
  }
  return pawnArr
}