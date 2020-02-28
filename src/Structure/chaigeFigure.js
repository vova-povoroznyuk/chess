import React from 'react';

import  { handleChaigeFigure } from '../logic/handleChaigeFigure';
import Figure from './figure';

export default (props) =>{
  const { state, updateState } = props;
  const color = state.player === "black" ? "white" : "black";
  return(
    <div className={`chaigeFigure ${color}`} onClick={(e) => handleChaigeFigure(e.target.dataset.figure, state, updateState)}>
        <label className="chaigeFigure_label">
            <input className="chaigeFigure_input" type="radio" name="chaigeFigure" value="horse" />
            <div>
                <Figure status={`${color} horse`} />
            </div>
        </label>
        <label className="chaigeFigure_label">
            <input className="chaigeFigure_input" type="radio" name="chaigeFigure" value="officer" />
            <div>
                <Figure status={`${color} officer`} />
            </div>
        </label>
        <label className="chaigeFigure_label">
            <input className="chaigeFigure_input" type="radio" name="chaigeFigure" value="tour" />
            <div>
                <Figure status={`${color} tour`} />
            </div>
        </label>
        <label className="chaigeFigure_label">
            <input className="chaigeFigure_input" type="radio" name="chaigeFigure" value="qween"  />
            <div>
                <Figure status={`${color} qween`} />
            </div>
        </label>
    </div>
  )
}