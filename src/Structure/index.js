import React from 'react';
import Board from './board'
export default () => {
    return(
        <div className={'container'}>
        <div className={'header'}>
            <a>Hello, React</a>
            <a>Hello, React</a>
            <a>Hello, React</a>
        </div>
        <div className="flex">
            <Board />
        </div>  
        </div>
    )
}
