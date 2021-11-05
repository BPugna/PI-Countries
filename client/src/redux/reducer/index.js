let initialState = {
    countries : [],
    details : []
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state, 
                countries: action.payload
            }
        case 'GET_COUNTRY_DETAILS':
            return {
                ...state,
                details: action.payload
            }
        default:
        return state; 
    }

}


export default reducer;




