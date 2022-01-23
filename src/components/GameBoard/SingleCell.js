import React from "react";



export default function GameBoard(props) {
    const handleLeftClick = (ev)=> {
        // if (!ev) return;
        ev.preventDefault()
        console.log('LEFT click!')
    }
    
    const handleRightClick = (ev)=> {
        // if (!ev) return;
        ev.preventDefault()
        console.log('RIGHT click!')
    }    
    
    
    return (
        <td onClick={handleLeftClick} onContextMenu={handleRightClick}>
            |R{props.cell.row}C{props.cell.column}| 
        </td>
    )
}

