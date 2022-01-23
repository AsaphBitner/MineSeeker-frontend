import React from "react";
import {useState, useEffect} from 'react'
// import cloneDeep from 'lodash/cloneDeep'

export default function ExtraLives(props) {
    // const [extraLives, setExtraLives] = useState(props.extraLives) 
    const [extraLivesToShow, setExtraLivesToShow] = useState('') 
    
    let howManyLives = ()=> 
        {switch (props.extraLives) {
            case 3:
                return `♥♥♥`
            case 2: 
                return '♥♥'
            case 1:
                return '♥'
            case 0: 
                return ''    
            default:
                return '';
        }}
    
    useEffect(() => {
        
        setExtraLivesToShow(prevLives => howManyLives())
        // console.log(extraLivesToShow)
    }, [props.extraLives])


    return (
        <div className="extra-lives" onClick={()=> props.setExtraLives(prevNum => 0)}>
         {extraLivesToShow}
        </div>
    )
}

