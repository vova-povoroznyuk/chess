import { checkDirection } from '../logic/utils';
import { diagonal, straight, horseDiraction } from '../data/figures';
import { castling } from '../logic/castling'

export function Pawn(data){
  const {x, y, color, player, status, moveArr, takeInPass } = data;
  if(color === 'white'){
      this.y1 = y+1;
      this.y2 = y+2;
      this.maxY = 7;
      this.startY = 1;
      this.enemy = 'black';
      this.color = 'white'; 
  }else{
      this.y1 = y-1;
      this.y2 = y-2;
      this.maxY = 0;
      this.startY = 6;
      this.enemy = 'white';
      this.color = 'black'; 
  }
  this.moveArr = () => {
      if(color === player && y !== this.maxY){
          if(status[this.y1][x] === 'empty'){
              moveArr.push([this.y1, x]);
              y === this.startY && status[this.y2][x] === 'empty' && moveArr.push([this.y2, x]);
          }
          if(x-1 >= 0){
            status[this.y1][x-1].indexOf(this.enemy)!== -1 && moveArr.push([this.y1, x-1]);
          }
          if(x + 1 < 8){
            status[this.y1][x+1].indexOf(this.enemy) !== -1 && moveArr.push([this.y1, x+1]);
          } 
          if(x === takeInPass.x + 1 && y === takeInPass.y){
            moveArr.push([this.y1, takeInPass.x])
          }
          if(x === takeInPass.x - 1 && y === takeInPass.y){
            moveArr.push([this.y1, takeInPass.x])
          }
      } 
  }
}



export function Officer(data){
  const { color, player } = data;
  if(color === 'white'){
      this.enemy = 'black';
      this.color = 'white'; 
  }else{
      this.enemy = 'white';
      this.color = 'black'; 
  }
  this.moveArr = () => {
      if(color === player){
        checkDirection(data, this.enemy, diagonal);
      }
  }
}

export function Tour(data){
  const { color, player } = data;
  if(color === 'white'){
      this.enemy = 'black';
      this.color = 'white'; 
  }else{
      this.enemy = 'white';
      this.color = 'black'; 
  }
  this.moveArr = () => {
      if(color === player){
        checkDirection(data, this.enemy, straight);
      }
  }
}

export function Qween(data){
  const { color, player } = data;
  if(color === 'white'){
      this.enemy = 'black';
      this.color = 'white'; 
  }else{
      this.enemy = 'white';
      this.color = 'black'; 
  }
  this.moveArr = () => {
      if(color === player){
        checkDirection(data, this.enemy, straight);
        checkDirection(data, this.enemy, diagonal);
      }
  }
}


export function King(data){
  const { color, player, canWhiteCastling, canBlackCastling } = data;
  if(color === 'white'){
      this.enemy = 'black';
      this.color = 'white'; 
      this.canRightCastling = canWhiteCastling.right;
      this.canLeftCastling = canWhiteCastling.left;
  }else{
      this.enemy = 'white';
      this.color = 'black'; 
      this.canRightCastling = canBlackCastling.right;
      this.canLeftCastling = canBlackCastling.left;
  }
  this.moveArr = () => {
      if(color === player){
        checkDirection(data, this.enemy, straight, 2);
        checkDirection(data, this.enemy, diagonal, 2);
        castling(data, this.canLeftCastling, this.canRightCastling)
        
      }
  }
}


export function Horse(data){
  const { color, player, status, moveArr, x, y } = data;
  if(color === 'white'){
      this.enemy = 'black';
      this.color = 'white'; 
  }else{
      this.enemy = 'white';
      this.color = 'black'; 
  }
  this.moveArr = () => {
    if(color === player){
      horseDiraction.forEach(el => {
          const newY = y + el[0];
          const newX = x + el[1];
          if(newY < 8 && newY >= 0 && newX < 8 && newX >= 0){
            status[newY][newX] === 'empty' &&  moveArr.push([newY, newX]);
            status[newY][newX].indexOf(this.enemy)!== -1 && moveArr.push([newY, newX]);
          }
        });
    }
  }
}
