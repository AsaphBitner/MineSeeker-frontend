import React from "react";
import { dataService } from "../../services/data-service.js"



export default function GameBoard(props) {
    
    const handleLeftClick = (ev)=> {
        // if (!ev) return;
        ev.preventDefault()
        // console.log('LEFT click!')
        dataService.placeMines(4, 2, props.row, props.column)
    }
    
    const handleRightClick = (ev)=> {
        // if (!ev) return;
        ev.preventDefault()
        // console.log('RIGHT click!')
    }    
    // const handleClick = (side) => { 
    //     return function(ev) { 
    //         ev.preventDefault()
    //         if(side == 'left') { console.log('left was clicked') } else {  console.log('right was clicked') } } }
    
    return (
        <td onClick={handleLeftClick} onContextMenu={handleRightClick}>
        {/* <td onClick={handleClick('left')} onContextMenu={handleClick('right')}> */}
            {/* |R{props.cell.row}C{props.cell.column}|  */}
            {(props.mineInCell) ? 'X' : '0'}
        </td>
    )
}

