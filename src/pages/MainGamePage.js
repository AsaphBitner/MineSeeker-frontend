import React from "react"
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react"
import { dataService } from "../services/data-service.js"

//COMPONENT IMPORTS /////////////////////////////
import MainGameHeadline from '../components/MainGameHeadline.js'
import GameBoard from "../components/GameBoard/GameBoard.js"


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
// const MINE = '💣';
// const BOOM = '💥';
// const FLAG = '🚩';
// const SMILE = '🙂';
// const SADFACE = '😥';
// const COOLGUY = '😎';


    // let gameOver = false
    // let gameOn = false
    // let gameLastOutcome = ''
    let boardSize = 4
    // let board;
    // board = dataService.buildNewBoard(boardSize)
    // let boardToRender;


    useEffect(
        ()=> {
            // console.table(board)
            console.log('Started!!!')
        }, [])
        
        let navigate = useNavigate()
        const navigateTo = (target) => navigate(target)    
     

     

    return (
        <div className="main-game-page">
            <h1 onClick={()=> navigateTo('/ScoreBoard')}>To Scoreboard</h1>
            <MainGameHeadline />
            <table>
                <tbody>
                    <GameBoard boardSize={boardSize} />
                </tbody>
            </table>
            
        </div>
)

}
