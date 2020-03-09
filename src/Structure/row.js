import React from 'react';
import Cell from './cell';

export default (props) => {
  let arr = props.status.map((item, i) => {
    const canGo = !(props.canGoSells.indexOf(i) === -1);
    let isSelected = i === props.selectedCell;
    return(
      <Cell canGo={canGo} isSelected={isSelected} row={props.row} cell={i} status={item} />
    )
  })
  return(
      <div className={'row'}>
          <div className={'number leftNum'}><span>{props.row + 1}</span></div>
          {arr}
          <div className={'number rightNum'}><span>{props.row + 1}</span></div>
      </div>
  )
}