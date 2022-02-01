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
    const SMILE = '🙂'
    // const SADFACE = '😥';
    // const COOLGUY = '😎';
    // Beginner (4*4 with 2 MINES)
// Medium (8 * 8 with 12 MINES)
// Expert (12 * 12 with 30 MINES)
    const [boardSize, setBoardSize] = useState(4)
    const [extraLives, setExtraLives] = useState(3) 
    const [safeClicks, setSafeClicks] = useState(3)
    const [numOfMines, setNumOfMines] = useState(2)

    const [smiley, setSmiley] = useState(SMILE) 
    const navigate = useNavigate()
    const navigateTo = (target) => navigate(target)    

    const startNewGame = (size)=> {
        console.log('Boardsize is ', size, '!')
    }

    useEffect(
        ()=> {
            switch (boardSize) {
                case 4:
                    setNumOfMines(oldNum => 2)
                    break;                
                case 8:
                    setNumOfMines(oldNum => 12)
                    break;
                case 12:
                    setNumOfMines(oldNum => 30)
                    break;    
                default:
                    console.log('No Mines!!!!!!!')
            }
        }, [boardSize])
        
     

     

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
