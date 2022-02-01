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
    
    
    return (
        <td onClick={handleLeftClick} onContextMenu={handleRightClick}>
            {/* |R{props.cell.row}C{props.cell.column}|  */}
            {(props.mineInCell) ? 'X' : '0'}
        </td>
    )
}

