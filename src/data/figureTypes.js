import { Pawn, Officer, Tour, Qween, King, Horse } from '../logic/figure';

export const figureTypes = [
  {type: 'pawn', constructor: Pawn},
  {type: 'officer', constructor: Officer},
  {type: 'tour', constructor: Tour},
  {type: 'qween', constructor: Qween},
  {type: 'king', constructor: King},
  {type: 'horse', constructor: Horse},
];