import { diagonal, straight } from '../data/figures';

export function getAttackDirection(kingPosition, data, diractionType, status){
  const { player } = data;
  const enemyColor = player === "white" ? 'black' : "white";
  const { x, y} = kingPosition
  let diractionKind = [];
  let figuresTypeToAttack = [];
  let attakKing = [];
  switch (diractionType) {
    case "diagonal":
      diractionKind = diagonal;
      figuresTypeToAttack = [`${enemyColor} officer`, `${enemyColor} qween`];
      break;
    case "straight":
      diractionKind = straight;
      figuresTypeToAttack = [`${enemyColor} tour`, `${enemyColor} qween`];
      break;
    default:
      break;
  }
  diractionKind.forEach(el => {
    let arr = [];
    let isAttack = false;
    for(let i = 1; i < 8; i++){
        const currentY = y + el[0] * i;
        const currentX = x + el[1] * i;
        if(currentY >= 0 && currentY < 8 && currentX >= 0 && currentX < 8){
          status[currentY][currentX] === "empty" && arr.push([currentY, currentX]);
          if(status[currentY][currentX].indexOf(player) !== -1){ break };
          if(figuresTypeToAttack.indexOf(status[currentY][currentX]) !== -1){
            arr.push([currentY, currentX]);
            isAttack = true;
            break;
          }
          if(status[currentY][currentX].indexOf(enemyColor) !== -1){ break }
        }else{
            break;
        }
      }
       isAttack && (attakKing = [...attakKing, ...arr]);
  })
  return attakKing;
}