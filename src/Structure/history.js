import React from 'react';
import { letters } from '../data/startPosition';

export default ({history}) => {
  const arr = history.map((el, i) =>{
    const letterStart = letters[el.currentX];
    const numberStart = el.currentY + 1;
    const letterEnd = letters[el.nextX];
    const numberEnd = el.nextY + 1;
    let text = `${i / 2 + 1}. ${el.typeFigure} ${letterStart}${numberStart} - ${letterEnd}${numberEnd}`;
    const position = 'right';
    if(i % 2 !== 0){
      text = `${el.typeFigure} ${letterStart}${numberStart} - ${letterEnd}${numberEnd}`;
    }
    return <p className={`${position} history-item`}>{text}</p>
  })
  return(
    <div className='history'>
      <p className='history-caption'>history</p>
      { arr }
    </div>
  )
}