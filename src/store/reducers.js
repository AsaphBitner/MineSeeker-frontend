
function myReducer(state = {}, action = {}){
    let cell;
    switch(action.type) {
        case 'GET_STATE':
            return state
        case 'REMOVE BAMIA':
            bamias = state.bamias.slice()
            bamias.pop()
            return {...state, bamias}
        default: 
            return state
    }   
}


