import React from 'react';

export default ({loser, endType}) => {
  const message  = loser === 'white' ? 'білим' : 'чорним';
  const type = endType === 'checkmate' ? 'Мат': endType === "stalemate" && 'Пат';
  return(
      <div className="message-wrap">
          <p className="message">{`${type} ${endType === 'checkmate' ? message : ''}`}</p>
      </div>
  )
}