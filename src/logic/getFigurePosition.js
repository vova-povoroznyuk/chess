export function getFigurePosition(color, type, status){
  let kingPosition = null;
  status.forEach((el, i) => {
    el.forEach((item, j) => {
      if(item === `${color} ${type}`){
        kingPosition = {y: i, x: j}
      }
    })
  })
  return kingPosition;
}

