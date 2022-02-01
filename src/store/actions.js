import { dataService } from "../services/data-service"

// export default actions = {
//     buildNewBoard
// }


export const buildNewBoard = async (dispatch) => {
    let board = dataService.buildNewBoard
    return board
}