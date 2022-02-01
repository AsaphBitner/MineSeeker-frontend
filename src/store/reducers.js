
export default function myReducer(state = {}, action = {}){
    let cell;
    switch(action.type) {
        case 'UPDATE_STATE':
            return state
        case 'UPDATE_BOARD':
            return {...state, gameBoard: action.gameBoard}
        default: 
            return state
    }   
}


