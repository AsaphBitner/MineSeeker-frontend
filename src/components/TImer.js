import React from "react";
import {useState, useEffect} from 'react'
import cloneDeep from 'lodash/cloneDeep'

export default function Timer(props) {
    const [time, setTime] = useState({seconds: 0, minutes: 0, hours: 0}) 
    const [timeToShow, setTimeToShow] = useState('00:00:00') 
    
    
    useEffect(() => {
        const timerInterval = setInterval(()=> {
            const tempTime = cloneDeep(time)
            tempTime.seconds++
            if (tempTime.seconds === 60) {tempTime.seconds = 0; tempTime.minutes++}
            if (tempTime.minutes === 60) {tempTime.minutes = 0; tempTime.hours++}
            if (tempTime.hours === 100) {tempTime.hours = 0}
            setTime(prevTime => tempTime) 
            // console.log(time)
            const zeroSec = (time.seconds < 10) ? '0' : ''
            const zeroMin = (time.minutes < 10) ? '0' : ''
            const zeroHr = (time.hours < 10) ? '0' : ''
            setTimeToShow(`${zeroHr}${time.hours}:${zeroMin}${time.minutes}:${zeroSec}${time.seconds}`)
        }, 1000)
        
        return () => {
            clearInterval(timerInterval)
        }
    }, [time])


    return (
        <div className="game-timer">
            {timeToShow}
        </div>
    )
}

