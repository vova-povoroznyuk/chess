import { checkEnemyHorse } from './checkEnemyHorse';
import { checkEnemyPawn } from './checkEnemyPawn';
import { getAttackDirection } from './getAttackDirection';


export function getAttackArr(kingPosition, state, resultStatus){
  const attakArr = [
    ...getAttackDirection(kingPosition, state, "diagonal", resultStatus), 
    ...getAttackDirection(kingPosition, state, "straight", resultStatus),
    ...checkEnemyHorse(kingPosition, state),
    ...checkEnemyPawn(kingPosition, state)
  ];
  return attakArr
}