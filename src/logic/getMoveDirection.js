export function getMoveDirection(data, enemy, diractionKind, size = 8){
    const {status, x, y } = data;
    let moveArr = [];
    diractionKind.forEach(el => {
        for(let i = 1; i < size; i++){
            const currentY = y + el[0] * i;
            const currentX = x + el[1] * i;
            if(currentY >= 0 && currentY < 8 && currentX >= 0 && currentX < 8){
                if(status[currentY][currentX] === 'empty'){
                    moveArr.push([currentY, currentX]);
                }else if(status[currentY][currentX].indexOf(enemy) !== -1){
                    moveArr.push([currentY, currentX]);
                    break;
                }else{
                   break;
                }
            }
        };
    })
    return moveArr;
}