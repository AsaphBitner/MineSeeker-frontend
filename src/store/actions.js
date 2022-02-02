import { dataService } from "../services/data-service"
// import { useDispatch } from "react-redux"
// export default actions = {
//     buildNewBoard
// }

// const dispatch = useDispatch()

export const buildNewBoard = async (dispatch) => {
    let board = dataService.buildNewBoard
    return board
}

export function changeBoardSize(size) {
    return async (dispatch) => {
        console.log('BOARD SIZE ACTION HAPPENED')
        dispatch({type: 'CHANGE_SIZE', boardSize: size})
    }
} 

// export function removeRobot(robotId) {
//     return async dispatch => {
//       await robotService.remove(robotId)
//       dispatch({ type: 'REMOVE_ROBOT', robotId })
//     }
//   }