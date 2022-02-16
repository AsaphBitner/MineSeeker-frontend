import cloneDeep from "lodash.clonedeep";
import React, { useState } from "react";
// import { dataService } from "../../services/data-service.js"
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { updateCell, buildNewBoard, placeMines, openAround, changeBoardSize, changeGameOver, changeGameOn, changeNumOfMines, changeLives, changeSafeClicks, changeSmiley, changeFlags, changeTime } from "../../store/actions.js"

function _SingleCell(props) {
    let [safeClickTOs, setSafeClickTOs] = useState(0)
    let state = useSelector(state => state)
    let cell = props.cell.cell
    const openClosed = () => {
        if (cell.cellClicked) {return 'open'} else {return 'closed'}
        }
    const checkVictory = () => {
        if (state.numOfFlags > 0) {return false}
        // let victoryStatus = true
        for (let ii = 0; ii < state.boardSize; ii++){
            for (let jj = 0; jj < state.boardSize; jj++){
                if (state.gameBoard[ii][jj].flagInCell && !state.gameBoard[ii][jj].mineInCell 
                    || !state.gameBoard[ii][jj].flagInCell && state.gameBoard[ii][jj].mineInCell) 
                {return false} 
            }
        }
        return true
    }    
    // console.log(cell)
        
    const handleLeftClick = async (ev)=> {
        ev.preventDefault()
        if (cell.flagInCell || cell.cellClicked || state.gameOver) {return}
        if (!state.gameOn && !state.gameOver) {
            props.changeGameOn(true)
            let payload = {
                size: state.boardSize, numMines: state.numOfMines, row: cell.row, column: cell.column
            }
            let newBoard = await props.placeMines(payload)
            // console.log(newBoard)
            cell = cloneDeep(newBoard[cell.row][cell.column])
            props.updateCell(cell)
        } 
        if (cell.mineInCell) {
            cell.cellContents = '💣'
            setSafeClickTOs(safeClickTOs+1)
            setTimeout( async () => {
                await setSafeClickTOs(safeClickTOs-1)
                if (safeClickTOs === 0 && !state.gameOver && state.gameOn && !cell.cellClicked && !cell.flagInCell)
                {cell.cellContents = ''; props.updateCell(cell)}
            }, 5000);
            if (state.lives > 1) {
                props.changeLives(state.lives-1)
                props.updateCell(cell)
                return
            }
            else {
                props.changeLives(state.lives-1)
                props.changeGameOn(false)
                props.changeGameOver(true)
            }
        } 
        else if (cell.minesAround) {cell.cellContents = `${cell.minesAround}`} 
        else {
            cell.cellContents = ''
            props.openAround(cell)
        }
        cell.cellClicked = true
        props.updateCell(cell)
        
        // console.log(cell.cellContents)
        // dataService.placeMines(4, 2, props.row, props.column)
        // console.log(cell.mineInCell)
        }
    
    const handleRightClick = async (ev)=> {
        ev.preventDefault()
        if (state.gameOver || !state.gameOn || cell.cellClicked) {return}
        else if (cell.flagInCell) {cell.flagInCell = false; cell.cellContents = ''; props.changeFlags(state.numOfFlags+1); props.updateCell(cell)}
        else if (!props.flagInCell && state.numOfFlags > 0) {
        cell.flagInCell = true; 
        cell.cellContents = '🚩'; 
        props.changeFlags(state.numOfFlags-1); 
        await props.updateCell(cell)
        if (checkVictory()){
            props.changeGameOn(false)
            props.changeGameOver(true)
        }
    }       
    }    

    return (
        <td className={`single-cell ${openClosed()}`} onClick={handleLeftClick} onContextMenu={handleRightClick}>
            {cell.cellContents}
        </td>
    )
}

const mapStateToProps = state => {
    return {...state}
  }
  const mapDispatchToProps = {
    updateCell,
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
    placeMines,
    openAround,
  }

  export const SingleCell = connect(mapStateToProps, mapDispatchToProps)(_SingleCell)

  
  
  
  
  // const handleClick = (side) => { 
      //     return function(ev) { 
          //         ev.preventDefault()
          //         if(side == 'left') { console.log('left was clicked') } else {  console.log('right was clicked') } } }
          // {/* <td onClick={handleClick('left')} onContextMenu={handleClick('right')}> */}
          // {/* |R{props.cell.row}C{props.cell.column}|  */}
          
          // _id: props._id, mineInCell: props.mineInCell, flagInCell: props.flagInCell, cellClicked: props.cellClicked, 
          //     minesAround: props.minesAround, row: props.row, column: props.column, cellContents: props.cellContents
          
          // let cellToShow = () => {
          //     // if (!cellClicked)
          //     switch(props.cellContents) {
          //         case '💥':
          //             return '💥'
          //         case '💣':
          //             return '💣'
          //         case '🚩':
          //             return '🚩'
          //         case '':
          //             return 'N'
                  // case 'CHANGE_GAME_OVER':
                  //     return {...state, gameOver: action.order}
                  // case 'CHANGE_MINES':
                  //     return {...state, numOfMines: action.numOfMines}
          //         default:
          //             return ''
          // }}
        //   state.gameBoard[props.cell.cell.row].find((item) => props.cell.cell._id === item._id)