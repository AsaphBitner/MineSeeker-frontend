import React from "react";
import {useState, useEffect} from 'react'
// import cloneDeep from 'lodash/cloneDeep'

export default function Smiley(props) {
    // const [extraLives, setExtraLives] = useState(props.extraLives) 
    const [smiley, setSmiley] = useState('') 
    
    useEffect(() => {
        setSmiley(prevSmiley => props.smiley)
    }, [props.smiley])

    return (
        <div className="smiley" onClick={()=> props.startNewGame(props.boardSize)} >
         {smiley}
        </div>
    )
}

