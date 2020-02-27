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


export const getColor = (string) => {
  const arr = string.split(' ');
  return arr[0];
}
export const getType = (string) => {
  const arr = string.split(' ');
  const type = arr[1] || "empty";
  return type;
}