let initialState = {
    countries : [],
    lastDetails : []
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            console.log("ESTE ES EL ESTADO",state);
            return {
                ...state, 
                countries: action.payload
            }
        case 'GET_COUNTRY_DETAILS':
            return {
                ...state,
                lastDetails: action.payload
            }
        default:
        return state; 
    }

}


export default reducer;




