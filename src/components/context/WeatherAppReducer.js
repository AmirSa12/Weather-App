const weatherAppReducer = (state, action) =>{
    switch(action.type){
        case 'GET_CITY':
            return {
                ...state,
                loadig: false,
            }
        default:
            return state
    
    }
}

export default weatherAppReducer