import React from "react";
import {useEffect} from 'react'
import cloneDeep from 'lodash/cloneDeep'
import { useSelector } from "react-redux";
import { changeTime } from "../store/actions";
import { connect } from "react-redux";

var lastUpdate = undefined

function _Timer(props) {
    let state = useSelector(state => state)
    let time = useSelector(state => state.time)
    
    const timerInterval = () => {
        if (!time) return 
        // if (!state.gameOn) return
        if (!lastUpdate) {lastUpdate = Date.now()}  
        var now = Date.now()
        var dt = (now - lastUpdate)
        const secs = Math.floor(dt / 1000) % 60
        lastUpdate = now
        let tempTime = state.time       
        tempTime.seconds += secs
        if (tempTime.seconds >= 60) {tempTime.seconds = 0; tempTime.minutes++}
        if (tempTime.minutes === 60) {tempTime.minutes = 0; tempTime.hours++}
        if (tempTime.hours === 100) {tempTime.hours = 0; tempTime.hundreds++}
        // console.log('TEMPTIME: ', tempTime)
    props.changeTime(tempTime)
    }


    
    useEffect(()=>{
            setInterval(() => {
                timerInterval()
            }, 1000); 
            // let time = cloneDeep(state.time)
            // console.log(time)
            // setTimeToShow(`${zeroHr}${tempTime.hours}:${zeroMin}${tempTime.minutes}:${zeroSec}${tempTime.seconds}`)
    }, [])


    const zeroSec = () => {return (time && time.seconds < 10) ? '0' : ''}
    const zeroMin = () => {return (time && time.minutes < 10) ? '0' : ''}
    const zeroHr = () => {return (time && time.hours < 10) ? '0' : ''}
    // const timeToShow = () => {return `${zeroHr()}${time.hours}:${zeroMin()}${time.minutes}:${zeroSec()}${time.seconds}`}

    return (
        <div className="game-timer">
            {(time) ? `${zeroHr()}${time.hours}:${zeroMin()}${time.minutes}:${zeroSec()}${time.seconds}` : 'NO TIME'}
        </div>
    )
}

const mapStateToProps = state => {
    return {...state}
  }
  const mapDispatchToProps = {
    changeTime,
  }

  export const Timer = connect(mapStateToProps, mapDispatchToProps)(_Timer)
