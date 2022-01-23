import React from "react";
import { dataService } from "../../services/data-service";
import SingleRow from './SingleRow.js'
import { useState, useEffect } from "react";


export default function GameBoard(props) {
    const [board, setBoard] = useState(null) 
    
    useEffect(() => {
        if (!props.boardSize) return
        const newBoard = dataService.buildNewBoard(props.boardSize)
        setBoard(oldBoard => newBoard)
    }, [props.boardSize])


    return (
        <div className="game-board-container">
            <table>
                <tbody>
                {(board) ? board.map((row, idx) => {return <SingleRow row={row} key={idx} />}) : <tr></tr>}
                </tbody>
            </table>
        </div>
    )

}