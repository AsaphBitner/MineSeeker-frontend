import React from "react";
// import {useState, useEffect} from 'react'
// import cloneDeep from 'lodash/cloneDeep'
import { connect, useSelector } from "react-redux";
import { changeSafeClicks } from "../store/actions";

function _SafeClicks(props) { 
    // const [safeClicksToShow, setSafeClicksToShow] = useState('') 
    let state = useSelector(state => state)

    let safeClicksToShow = ()=> 
        {switch (state.safeClicks) {
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

    return (
        <div className="safe-clicks" onClick={()=> console.log('Safe Clicked!')}>
         {safeClicksToShow()}
        </div>
    )
}

const mapStateToProps = state => {
    return {...state}
  }
  const mapDispatchToProps = {
    changeSafeClicks,
  }

  export const SafeClicks = connect(mapStateToProps, mapDispatchToProps)(_SafeClicks)
