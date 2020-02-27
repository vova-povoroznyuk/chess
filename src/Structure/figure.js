/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React from 'react';

export default (props) =>{
    switch(props.status){
        case 'white king':
            return <span className={'figure'} data-figure={'white king'} >&#9812;</span>;
        case 'white qween':
            return <span className={'figure'} data-figure={'white qween'}>&#9813;</span>;
        case 'white tour':
            return <span className={'figure'} data-figure={'white tour'}>&#9814;</span>;
        case 'white officer':
            return <span className={'figure'} data-figure={'white officer'}>&#9815;</span>;
        case 'white horse':
            return <span className={'figure'} data-figure={'white horse'}>&#9816;</span>;
        case 'white pawn':
            return <span className={'figure'} data-figure={'white pawn'}>&#9817;</span>;
        case 'black king':
            return <span className={'figure'} data-figure={'black king'}>&#9818;</span>;
        case 'black qween':
            return <span className={'figure'} data-figure={'black qween'}>&#9819;</span>;
        case 'black tour':
            return <span className={'figure'} data-figure={'black tour'}>&#9820;</span>;
        case 'black officer':
            return <span className={'figure'} data-figure={'black officer'}>&#9821;</span>;
        case 'black horse':
            return <span className={'figure'} data-figure={'black horse'}>&#9822;</span>;
        case 'black pawn':
            return <span className={'figure'} data-figure={'black pawn'}>&#9823;</span>;
        default:
            return null;
                    
    }
    return <span className={'figure'} data-figure={'white king'} >&#9812;</span>;
}