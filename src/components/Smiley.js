import React from "react";
import {useState, useEffect} from 'react'
// import cloneDeep from 'lodash/cloneDeep'

export default function Smiley(props) {
    // const [extraLives, setExtraLives] = useState(props.extraLives) 
    const [smiley, setSmiley] = useState('') 
    
    // let howManyLives = ()=> 
    //     {switch (props.extraLives) {
    //         case 3:
    //             return `♥♥♥`
    //         case 2: 
    //             return '♥♥'
    //         case 1:
    //             return '♥'
    //         case 0: 
    //             return ''    
    //         default:
    //             return '';
    //     }}
    
    useEffect(() => {
        setSmiley(prevSmiley => props.smiley)
    }, [props.smiley])

    return (
        <div className="smiley" onClick={()=> props.startNewGame(props.boardSize)} >
         {smiley}
        </div>
    )
}

