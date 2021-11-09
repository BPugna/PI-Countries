let initialState = {
    countries : [],
    allCountries: [],
    details : [],
    activities: []
}

function reducer(state = initialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':
            return {
                ...state, 
                countries: action.payload,
                allCountries: action.payload
            }
        case 'SEARCH_BY_NAME':
            return {
                ...state,
                countries: action.payload
            }
        case 'FILTER_BY_REGION':
            let regionFilter = state.allCountries.filter(el => 
                el.region === action.payload
                )    
            return {
                ...state,
                countries: regionFilter,
            };
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
        case 'SEARCH_ACTIVITY': 
            let searchCountries = state.allCountries.filter(el => {
                return(
                    el.activities.length > 0
                )
            })
            let searchActivity = searchCountries.filter(el => {
                return(
                    el.activities.find(elx => elx.name === action.payload)
                )})
            return {
                ...state,
                countries: searchActivity
            }
        case 'FILTER_BY_ACTIVITY':
            return {
                ...state,
                activities: action.payload
            }
        case 'POST_ACTIVITY':
            return {
                ...state
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




