import React from "react";
// import { dataService } from "../../services/data-service";
import SingleCell from './Single-Cell.js'

export default function GameBoard(props) {

    

    
    return (
        <tr>
            {props.row.map(cell => <SingleCell cell={cell} />)}
        </tr>
    )
}




{/* <td>cell.testText</td> */}