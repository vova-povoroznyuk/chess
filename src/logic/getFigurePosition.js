export function getFigurePosition(color, type, status){
  let figurePosition = null;
  status.forEach((el, i) => {
    el.forEach((item, j) => {
      if(item === `${color} ${type}`){
        figurePosition = {y: i, x: j}
      }
    })
  })
  return figurePosition;
}

