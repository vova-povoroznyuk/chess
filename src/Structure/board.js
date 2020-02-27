import React from 'react';
import { letters} from '../data/startPosition';

import Row from './row';
import { handleClick } from '../logic/handleClick';
import { useUserState } from '../logic/useUserState';

import ChaigeFigure from '../Structure/chaigeFigure';

export default () => {
    const { updateState, state } = useUserState()
    const canGo = state.moveArr;
    console.log(state);
    return(
        <div className="game">
            <div className="player">
                <span>Хід: {state.player === "white" ? "Білих" : "Чорних"}</span>
            </div>
            <div className={'board'}>
                <div className={'letter'}>
                    {letters.map((item) => 
                        <div className={'letterItem'}><span>{item}</span></div>
                    )}
                </div>
                {state.status.map((item, i) => 
                    {
                        let canGoSells = [];
                        let selectedCell = null;
                        canGo.forEach((el) => {
                            if(el[0] === i){
                                canGoSells.push(el[1])
                            }
                            if(i === state.currentY){
                                // console.log(state.currentX);
                                selectedCell = state.currentX;
                            }
                        })
                        return(
                            <Row selectedCell={selectedCell} status={item} canGoSells={canGoSells}  row={i} onClick={(x, y) => handleClick(x, y, state, updateState)} />
                        )
                    }
                )}
                <div className={'letter bottomLetter'}>
                    {letters.map((item) => 
                        <div className={'letterItem'}><span>{item}</span></div>
                    )}
                </div>
                {state.isChaigeFigure && <ChaigeFigure state={state} updateState={updateState} />}
            </div>
        </div>
    )
    
}











