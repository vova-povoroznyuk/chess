export function getKingPosition(color, status){
  let kingPosition = null;
  status.forEach((el, i) => {
    el.forEach((item, j) => {
      if(item === `${color} king`){
        kingPosition = {y: i, x: j}
      }
    })
  })
  return kingPosition;
}