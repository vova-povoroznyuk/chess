import React from 'react';
import { letters} from '../data/startPosition';

import { handleClick } from '../logic/handleClick';
import { useUserState } from '../logic/useUserState';
import { useCheckEndEffect } from '../logic/useCheckEndEffect';

import ChaigeFigure from './chaigeFigure';
import Row from './row';
import Message from './message';
import History from './history';

export default () => {
    const { updateState, state } = useUserState();
    useCheckEndEffect(state, updateState);
    const canGo = state.moveArr;
    return(
        <div className="game flex">
            <div>
                <div className="player" >
                    <span>Хід: {state.player === "white" ? "Білих" : "Чорних"}</span>
                </div>
                <div className={'board-wrap'}>
                    <div className={'letter'}>
                        {letters.map((item) => 
                            <div className={'letterItem'}><span>{item}</span></div>
                        )}
                    </div>
                    <div className={'board'} title="board"  onClick={(e) => handleClick(e.target.dataset.coordinates, state, updateState)}>
                        {state.status.map((item, i) => {
                            let canGoSells = [];
                            let selectedCell = null;
                            canGo.forEach((el) => el[0] === i && canGoSells.push(el[1]));
                            i === state.currentY && (selectedCell = state.currentX);
                            return(
                                <Row selectedCell={selectedCell} status={item} canGoSells={canGoSells}  row={i} />
                            )
                        })}
                        {state.isChaigeFigure && <ChaigeFigure state={state} updateState={updateState} />}
                        {state.isEnd && <Message loser={state.isEnd.loser} endType={state.isEnd.endType} />}
                    </div>
                    <div className={'letter bottomLetter'}>
                        {letters.map((item) => 
                            <div className={'letterItem'}><span>{item}</span></div>
                        )}
                    </div>
                </div>
            </div>
            <History history={state.history} />
        </div>
    )  
}



  
  
 
  
  
  
  








