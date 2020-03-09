import React from 'react';
import Game from './game'
export default () => {
    return(
        <div className={'container'}>
        <div className={'header'}>
            <a>Hello, React</a>
            <a>Hello, React</a>
            <a>Hello, React</a>
        </div>
        <div className="flex">
            <Game />
        </div>  
        </div>
    )
}
