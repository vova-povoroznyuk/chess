import { useEffect } from 'react';
import { getFigurePosition } from '../logic/getFigurePosition';
import { checkEnd } from '../logic/checkEnd';

import { getAttackArr } from '../logic/getAttackArr';

export function useCheckEndEffect(state, updateState){
  useEffect(() => {
      if(state.isEnd){
          return;
      }
      const isEnd = checkEnd(state);
      if(isEnd){
          let updateData = {};
          const kingPosition = getFigurePosition(state.player, 'king', state.status);
          const isCheck = getAttackArr(kingPosition, state, state.status).length > 0;
          updateData = { ...state, isEnd: {loser: state.player, endType: isCheck ? 'checkmate' : 'stalemate'}};
          updateState(updateData)
          return;
      }
  })
}