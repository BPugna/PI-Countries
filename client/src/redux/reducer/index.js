let initialState = {
    countries : [],
    allCountries: [],
    details : []
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state, 
                countries: action.payload,
                allCountries: action.payload
            }
        case 'ORDER_BY_POPULATION':
            let populationSort = action.payload === 'asc' ?
                state.countries.sort(function( a, b ){
                    if(a.population > b.population){
                        return 1;
                    }
                    if(b.population > a.population){
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function( a, b ){
                    if(a.population > b.population){
                        return -1;
                    }
                    if(b.population > a.population){
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: populationSort
            };
        case 'ORDER_BY_NAME':
            let sortedArr = action.payload === 'asc' ?
                state.countries.sort(function( a, b ){
                    if(a.name > b.name){
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                }) :
                state.countries.sort(function( a, b ){
                    if(a.name > b.name){
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: sortedArr
            };

        case 'SEARCH_BY_NAME':
            return {
                search: action.payload
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




