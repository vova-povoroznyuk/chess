import React from 'react';

import Figure from './figure';

export default (props) =>{
  const canGo = props.canGo ? "canGo" : '';
  const isSelected = props.isSelected ? "selected" : ''
  return(
      <div className={`cell ${canGo} ${isSelected}`}>
          <Figure status={props.status} coordinates={`${props.cell}, ${props.row}`}/>
      </div>
  )
}