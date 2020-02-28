import React from 'react';

import Figure from './figure';

export default (props) =>{
  const canGo = props.canGo ? "canGo" : '';
  return(
      <div className={`cell ${canGo} ${props.isSelected}`} onClick={() => props.onClick(props.cell, props.row)}>
          <Figure status={props.status} />
      </div>
  )
}