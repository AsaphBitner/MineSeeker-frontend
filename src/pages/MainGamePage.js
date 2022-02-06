import React from "react"
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
import { buildNewBoard, changeBoardSize, changeGameOver, changeGameOn, changeNumOfMines, changeLives, changeSafeClicks, changeSmiley, changeFlags, changeTime } from "../store/actions.js"
import { connect } from "react-redux"
import { useSelector } from "react-redux"
// import { dataService } from "../services/data-service.js"
//===============================================================================


//COMPONENT IMPORTS /////////////////////////////
//===============================================================================

import MainGameHeadline from '../components/MainGameHeadline.js'
import {GameBoard} from "../components/GameBoard/GameBoard.js"
import {Timer} from "../components/Timer.js"
import {Lives} from "../components/Lives.js"
import {SafeClicks} from "../components/SafeClicks.js"
import Smiley from "../components/Smiley.js"
//===============================================================================

// let navigate = useNavigate()

function _MainGamePage(props){
    const state = useSelector(state => state)
    const navigate = useNavigate()
// console.log('Main Game Page: ', props)
//     var gSize = 4;
// var gNumOfMines = 2;
// var gAvailableFlags = gNumOfMines;
// var gBoard;
// var gGameIsOver = false;
// var gGameOn = false;
// var gLives = 3;
// var gSafeClicks = 3;


// let gameOver = false
// let gameOn = false
// let gameLastOutcome = ''
    // const MINE = '💣';
    // const BOOM = '💥';
    // const FLAG = '🚩';
    const smile = '🙂'
    // const sadFace = '😥';
    // const coolFace = '😎';
    // Beginner (4*4 with 2 MINES)
    // Medium (8 * 8 with 12 MINES)
    // Expert (12 * 12 with 30 MINES)
    
    
    const navigateTo = (target) => navigate(target)    

    const startNewGame = (size)=> {
        console.log('Boardsize is ', size, '!')
    }

    // ComponentDidMount
    useEffect( () => {
        props.changeBoardSize(4)
        props.changeNumOfMines(2)
        props.changeGameOn(false)
        props.changeGameOver(false)
        props.changeSafeClicks(3)
        props.changeLives(4)
        props.changeSmiley(smile)
        props.buildNewBoard(4)
        props.changeFlags(2)
        props.changeTime({seconds: 0, minutes: 0, hours: 0, hundreds: 0})
        // console.log(state)

        }, [])

    //  useEffect(
    //     async ()=> {
    //         switch (boardSize) {
    //             case 4:
    //                 setNumOfMines(oldNum => 2)
    //                 break;                
    //             case 8:
    //                 setNumOfMines(oldNum => 12)
    //                 break;
    //             case 12:
    //                 setNumOfMines(oldNum => 30)
    //                 break;    
    //             default:
    //                 console.log('No Mines!!!!!!!')
    //         }
    //     }, [boardSize])
    // console.log(state)
        
     

     

    if (state) return (
        <div className="main-game-page">
            <h1 onClick={()=> navigateTo('/ScoreBoard')}>To Scoreboard</h1>
            <MainGameHeadline />
            <Timer />
            <Lives />
            {/* <SafeClicks /> */}
            {/* <Smiley startNewGame={startNewGame} />             */}
            {/* <GameBoard /> */}
        </div>
)

}

const mapStateToProps = state => {
    return {...state}
  }
  const mapDispatchToProps = {
    changeBoardSize,
    buildNewBoard,
    changeGameOn,
    changeGameOver,
    changeNumOfMines,
    changeLives, 
    changeSafeClicks, 
    changeSmiley,
    changeFlags,
    changeTime,
  }

  export const MainGamePage = connect(mapStateToProps, mapDispatchToProps)(_MainGamePage)