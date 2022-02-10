import React from "react"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { buildNewBoard, changeBoardSize, changeGameOver, changeGameOn, changeNumOfMines, changeLives, changeSafeClicks, changeSmiley, changeFlags, changeTime, zeroTimer } from "../store/actions.js"
import { connect } from "react-redux"
import { useSelector } from "react-redux"
// import { dataService } from "../services/data-service.js"
//===============================================================================


//COMPONENT IMPORTS /////////////////////////////
//===============================================================================

import MainGameHeadline from '../components/MainGameHeadline.js'
import { GameBoard } from "../components/GameBoard/GameBoard.js"
import { Timer } from "../components/Timer.js"
import { Lives } from "../components/Lives.js"
import { SafeClicks } from "../components/SafeClicks.js"
import { Smiley } from "../components/Smiley.js"
import { ChangeDifficulty } from "../components/ChangeDifficulty.js"
//===============================================================================

// let navigate = useNavigate()

function _MainGamePage(props) {
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

    // const startNewGame = (size) => {
    //     console.log('Boardsize is ', size, '!')
    // }

    // ComponentDidMount
    useEffect(() => {
        props.changeBoardSize(4)
        props.changeNumOfMines(2)
        props.changeGameOn(false)
        props.changeGameOver(false)
        props.changeSafeClicks(3)
        props.changeLives(4)
        props.changeSmiley(smile)
        props.buildNewBoard(4)
        props.changeFlags(2)
        props.changeTime({})
        props.zeroTimer(0)
        // props.zeroTimer('false')
        // console.log(state)
        // seconds: 0, minutes: 0, hours: 0, hundreds: 0
    }, [])


    const resetGame = (size = state.boardSize) => {
        props.changeBoardSize(size)
        props.changeNumOfMines(getNumOfMines(size))
        props.changeGameOn(false)
        props.changeGameOver(false)
        props.changeSafeClicks(3)
        props.changeLives(4)
        props.changeSmiley(smile)
        props.buildNewBoard(size)
        props.changeFlags(getNumOfMines(size))
        props.changeTime({})
        props.zeroTimer(geteZeroTimer())
        // props.zeroTimer('false')
    }

    const geteZeroTimer = ()=> {if (state.zeroTimer <= 1000) {return (state.zeroTimer+1)} else {return 0}}

    const getNumOfMines = (size) => {
                switch (size) {
                case 4:
                    return 2             
                case 8:
                    return 12
                case 12:
                    return 30    
                default:
                    return state.numOfMines
        }
    }
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
            <h1 onClick={() => navigateTo('/ScoreBoard')}>To Scoreboard</h1>
            <MainGameHeadline />
            <div className="game-area">
                <div className="safe-and-difficulty game-sub-area">
                    <SafeClicks />
                    <ChangeDifficulty resetGame={resetGame} />
                </div>
                <div className="lives-and-timer game-sub-area">
                    <Lives />
                    <Timer />
                </div>
                <div className="smiley-and-board">
                <Smiley resetGame={resetGame} />
                <GameBoard />
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return { ...state }
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
    zeroTimer,
}

export const MainGamePage = connect(mapStateToProps, mapDispatchToProps)(_MainGamePage)