import React from "react";
// import { dataService } from "../../services/data-service.js"
import { useSelector } from "react-redux";
import { updateCell } from "../../store/actions";
import { connect } from "react-redux";

function _SingleCell(props) {
    let state = useSelector(state => state)
    const handleLeftClick = (ev)=> {
        ev.preventDefault()
        // dataService.placeMines(4, 2, props.row, props.column)
    }
    
    const handleRightClick = (ev)=> {
        ev.preventDefault()
    }    
    
    return (
        <td onClick={handleLeftClick} onContextMenu={handleRightClick}>
            {(props.mineInCell) ? 'X' : '0'}
        </td>
    )
}

const mapStateToProps = state => {
    return {...state}
  }
  const mapDispatchToProps = {
    updateCell,
  }

  export const SingleCell = connect(mapStateToProps, mapDispatchToProps)(_SingleCell)





// const handleClick = (side) => { 
//     return function(ev) { 
//         ev.preventDefault()
//         if(side == 'left') { console.log('left was clicked') } else {  console.log('right was clicked') } } }
// {/* <td onClick={handleClick('left')} onContextMenu={handleClick('right')}> */}
    // {/* |R{props.cell.row}C{props.cell.column}|  */}