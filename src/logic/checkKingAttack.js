import { checkKingDirection, getType } from '../logic/utils';
import { getKingPosition } from '../logic/getKingPosition';
import { checkEnemyHorse } from '../logic/checkEnemyHorse';
import { checkEnemyPawn } from '../logic/checkEnemyPawn';

export function checkKingAttack(state, resultStatus){
  const { player } = state;
  let kingPosition = getKingPosition(player, resultStatus);
  let attakArr = [
    ...checkKingDirection(kingPosition, state, "diagonal", resultStatus), 
    ...checkKingDirection(kingPosition, state, "straight", resultStatus),
    ...checkEnemyHorse(kingPosition, state),
    ...checkEnemyPawn(kingPosition, state)
  ];
  return attakArr
}

