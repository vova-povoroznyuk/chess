import { useEffect } from 'react';
import { getFigurePosition } from '../logic/getFigurePosition';
import { checkEnd } from '../logic/checkEnd';

import { getAttackArr } from '../logic/getAttackArr';

export function useCheckEndEffect(state, updateState){
  useEffect(() => {
      if(state.isEnd){
          return;
      }
      const isEnd = checkEnd({...state});
      if(isEnd){
          let updateData = {...state};
          const kingPosition = getFigurePosition(updateData.player, 'king', updateData.status);
          const isCheck = getAttackArr(kingPosition, updateData, updateData.status).length > 0;
          updateData = {...updateData, isEnd: {loser: updateData.player, endType: isCheck ? 'checkmate' : 'stalemate'}};
          updateState({
          ...updateData,
          })
          return;
      }
  })
}