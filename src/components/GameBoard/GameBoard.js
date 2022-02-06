import React from "react";
import SingleRow from './SingleRow.js'
import { buildNewBoard } from "../../store/actions";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

function _GameBoard(props) {
    let state = useSelector(state => state)
    // console.log(state.gameBoard)

    return (
        <div className="game-board-container">
            <table>
                <tbody>
                {(state.gameBoard) ? state.gameBoard.map((row, idx) => {return <SingleRow row={row} key={idx} />}) : <tr></tr>}
                </tbody>
            </table>
        </div>
    )

}

const mapStateToProps = state => {
    return {...state}
  }
  const mapDispatchToProps = {
    // changeBoardSize,
    buildNewBoard,
    // tester,
  }

  export const GameBoard = connect(mapStateToProps, mapDispatchToProps)(_GameBoard)