import React from "react"
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
// import { dataService } from "../services/data-service.js"
//===============================================================================


//COMPONENT IMPORTS /////////////////////////////
//===============================================================================

import MainGameHeadline from '../components/MainGameHeadline.js'
import GameBoard from "../components/GameBoard/GameBoard.js"
import Timer from "../components/Timer.js"
import ExtraLives from "../components/ExtraLives.js"
import SafeToClick from "../components/SafeToClick.js"
import Smiley from "../components/Smiley.js"
//===============================================================================

// let navigate = useNavigate()

export default function MainGamePage(){
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
// let board;
// board = dataService.buildNewBoard(boardSize)
// let boardToRender;
    // const [gameIsOn, setGameIsOn] = useState(false)
    // const [gameIsOver, setGameIsOver] = useState(false)
    // const MINE = '💣';
    // const BOOM = '💥';
    // const FLAG = '🚩';
    const SMILE = '🙂';
    // const SADFACE = '😥';
    // const COOLGUY = '😎';
    const [boardSize, setBoardSize] = useState(4)
    const [extraLives, setExtraLives] = useState(3) 
    const [safeClicks, setSafeClicks] = useState(3) 
    const [smiley, setSmiley] = useState(SMILE) 
    const navigate = useNavigate()
    const navigateTo = (target) => navigate(target)    

    const startNewGame = (size)=> {
        console.log('Boardsize is ', size, '!')
    }

    useEffect(
        ()=> {
            
            // function initGame() {
            //     // console.log('Let\'s start!');
            //     gBoard = buildBoard(gSize);
            //     renderBoard(gBoard);
            //     gGameOn = false;
            //     updateSmiley('play');
            //     flagChange(0, 0, 0)
            // };
            // console.table(board)
            // console.log('Started!!!')
        }, [])
        
     

     

    return (
        <div className="main-game-page">
            <h1 onClick={()=> navigateTo('/ScoreBoard')}>To Scoreboard</h1>
            <MainGameHeadline />
            <Timer />
            <ExtraLives extraLives={extraLives} setExtraLives={setExtraLives} />
            <SafeToClick safeClicks={safeClicks} setSafeClicks={setSafeClicks} />
            <Smiley smiley={smiley} boardSize={boardSize} startNewGame={startNewGame} />            
            <GameBoard boardSize={boardSize}  />
        </div>
)

}
