import React from "react";
import {useState, useEffect} from 'react'
// import cloneDeep from 'lodash/cloneDeep'

export default function SafeClicks(props) { 
    const [safeClicksToShow, setSafeClicksToShow] = useState('') 
    
    let howManySafeClicks = ()=> 
        {switch (props.safeClicks) {
            case 3:
                return `🔎🔎🔎`
            case 2: 
                return '🔎🔎'
            case 1:
                return '🔎'
            case 0: 
                return ''    
            default:
                return '';
        }}
    
    useEffect(() => {
        
        setSafeClicksToShow(prevSafeClicks => howManySafeClicks())
    }, [props.safeClicks])


    return (
        <div className="safe-clicks" onClick={()=> props.setSafeClicks(prevNum => 0)}>
         {safeClicksToShow}
        </div>
    )
}

