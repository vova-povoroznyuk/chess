import { useState } from 'react';
import { initialStatus } from '../data/startPosition';

export const initialState = {
  status: initialStatus,
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
  isEnd: null,
  history: [],
  firebase: [],
};

export function useUserState(){
  
  const [state, setState] = useState(initialState);
  function updateState(data){
      setState({ ...state, ...data,});
  }
  return { updateState, state};
}