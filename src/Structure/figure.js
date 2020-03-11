import React from 'react';

export default (props) =>{
    const figure = arr.find(el => el.figureType === props.status);
    if(figure){
        const figureNode = String.fromCharCode(figure.code)
        return (
            <span className={'figure'} data-coordinates={props.coordinates} data-figure={figure.figureType}>{figureNode}</span>
        );
    }
    return <span className={'figure empty'} data-coordinates={props.coordinates}></span>;;
}


const arr = [
    {code: 9812, figureType: 'white king'},
    {code: 9813, figureType: 'white qween'},
    {code: 9814, figureType: 'white tour'},
    {code: 9815, figureType: 'white officer'},
    {code: 9816, figureType: 'white horse'},
    {code: 9817, figureType: 'white pawn'},
    {code: 9818, figureType: 'black king'},
    {code: 9819, figureType: 'black qween'},
    {code: 9820, figureType: 'black tour'},
    {code: 9821, figureType: 'black officer'},
    {code: 9822, figureType: 'black horse'},
    {code: 9823, figureType: 'black pawn'},
]
