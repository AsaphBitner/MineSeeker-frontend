import React from "react";
import { dataService } from "../../services/data-service";
import SingleRow from './Single-Row.js'


export default function GameBoard(props) {

    let board = dataService.buildNewBoard(props.boardSize)
    // console.log(props)
    // console.table(board)
    let renderCells = (array) => array.map((cell) => <td key={cell._id}>{cell.testText}</td>)
    let renderRow = (array) => <tr>{renderCells(array)}</tr>
    let BoardToRender = board.map(row => renderRow(row))
    // console.log(BoardToRender)


    return (
        <div className="game-board-container">
            <table>
                <tbody>
                {board.map(row => <SingleRow row={row} />)}
                </tbody>
            </table>
        </div>
    )

}