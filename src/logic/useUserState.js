import { useState } from 'react';
import { startPosition } from '../data/startPosition';

export function useUserState(){
  const initialState = {
      status: startPosition,
      move: false,
      moveArr: [],
      currentX: null,
      currentY: null,
      player: 'white',
      typeFigure: '',
      isChaigeFigure: false,
      canWhiteCastling: {right: true, left: true},
      canBlackCastling: {right: true, left: true},
      takeInPass: {}, 
  };
  const [state, setState] = useState(initialState);
  function updateState(data){
      setState({ ...state, ...data,});
  }
  return { updateState, state};
}