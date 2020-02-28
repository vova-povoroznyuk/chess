import { diagonal, straight, horseDiraction } from '../data/figures';

export function checkDirection(data, enemy, diractionKind, size = 8){
  const {status, x, y, moveArr} = data;
  diractionKind.forEach(el => {
      for(let i = 1; i < size; i++){
          const newY = y + el[0] * i;
          const newX = x + el[1] * i;
          if(newY >= 0 && newY < 8 && newX >= 0 && newX < 8){
              if(status[newY][newX] === 'empty'){
                  moveArr.push([newY, newX]);
              }else if(status[newY][newX].indexOf(enemy) !== -1){
                  moveArr.push([newY, newX]);
                  i = 8;
              }else{
                  i = 8;
              }
          }
      };
  });
}

export function checkKingDirection(kingPosition, data, diractionType, status){
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
    case "horseDiraction":
      diractionKind = horseDiraction;
      figuresTypeToAttack = [`${enemyColor} horse`]
      break;
  
    default:
      break;
  }
  diractionKind.forEach(el => {
    let arr = [];
    let isAttack = false;
      for(let i = 1; i < 8; i++){
          const newY = y + el[0] * i;
          const newX = x + el[1] * i;
          if(newY >= 0 && newY < 8 && newX >= 0 && newX < 8){
            if(status[newY][newX] === "empty"){
              arr.push([newY, newX, status[newY][newX]]);
            }
            if(status[newY][newX].indexOf(player) !== -1){
                i = 8;
            }
            if(figuresTypeToAttack.indexOf(status[newY][newX]) !== -1){
              arr.push([newY, newX, status[newY][newX]]);
              isAttack = true;
              i = 8;
            }
            if(status[newY][newX].indexOf(enemyColor) !== -1){
              i = 8;
            }
          }else{
              i = 8;
          }
      }
       isAttack && (attakKing = [...attakKing, ...arr]);
  })
  return attakKing;
}


export const getColor = (string) => {
  const arr = string.split(' ');
  return arr[0];
}
export const getType = (string) => {
  const arr = string.split(' ');
  const type = arr[1] || "empty";
  return type;
}