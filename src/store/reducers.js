
export default function myReducer(state = {Hello: 'HELLO!!!'}, action = {}){
    let cell;
    switch(action.type) {
        case 'UPDATE_STATE':
            return state
        case 'UPDATE_BOARD':
            return {...state, gameBoard: action.gameBoard}
        case 'CHANGE_SIZE':
            return {...state, boardSize: action.boardSize}
        default: 
            return state
    }   
}


