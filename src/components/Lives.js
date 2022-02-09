import React from "react";
// import {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import { changeLives } from "../store/actions";
import { connect } from "react-redux";

function _Lives(props) {
    let state = useSelector(state => state)

    let livesToShow = ()=> 
        {switch (state.lives) {
            case 4:
                return `💖 💖 💖`
            case 3: 
                return '💖 💖 _'
            case 2:
                return '💖 _ _'
            case 1: 
                return '_ _ _'    
            default:
                return '_ _ _';
        }}

        const noExtraLives = () => {
            if (state.gameOn) {props.changeLives(1)}
        }


    return (
        <div className="extra-lives" onClick={() => noExtraLives()}>
         {livesToShow()}
        </div>
    )
}
const mapStateToProps = state => {
    return {...state}
  }
  const mapDispatchToProps = {
    changeLives,
  }

  export const Lives = connect(mapStateToProps, mapDispatchToProps)(_Lives)
