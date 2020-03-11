import { getType } from '../logic/utils';
import { getMoveDirection } from '../logic/getMoveDirection';
import { diagonal, straight } from '../data/figures';
import { castling } from '../logic/castling'
import { getPawnMoveArr } from './getPawnMoveArr';
import { getHorseMoveArr } from './getHorseMoveArr';

export function getMoveArr(data){
  const { x, y, player, status, takeInPass, canWhiteCastling, canBlackCastling} = data;
  let enemy = 'white';
  player === 'white' && (enemy = 'black');
  let moveArr = [];
  const type = getType(status[y][x]);
  switch (type) {
    case 'pawn':
       moveArr = getPawnMoveArr(x, y, player, status, takeInPass, enemy);
      break;
    case 'horse':
      moveArr = getHorseMoveArr(x, y, status, enemy);
      break;
    case 'officer':
      moveArr = getMoveDirection(data, enemy, diagonal);
      break;
    case 'tour':
      moveArr = getMoveDirection(data, enemy, straight);
      break;
    case 'qween':
      moveArr = [
        ...getMoveDirection(data, enemy, straight),
        ...getMoveDirection(data, enemy, diagonal)
      ];
      break;
    case 'king':
      let canRightCastling = canBlackCastling.right;;
      let canLeftCastling = canBlackCastling.left;;
      if(player === 'white'){
        canRightCastling = canWhiteCastling.right;
        canLeftCastling = canWhiteCastling.left;
      }
      moveArr = [
        ...getMoveDirection(data, enemy, straight, 2),
        ...getMoveDirection(data, enemy, diagonal, 2),
        ...castling(data, canLeftCastling, canRightCastling),
      ];
      break;
    default:
      break;
  }
  return moveArr;
}