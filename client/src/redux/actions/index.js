import axios from 'axios';

const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';


 
export function getCountries(){
    return async function(dispatch){
    let request = await axios.get('http://localhost:3001/countries');
    return dispatch({
        type: GET_COUNTRIES,
        payload: request.data
        })
    }
}

export function getCountriesDetails(url){
    return async function(dispatch){
        let detailRequest = await axios.get(`http://localhost:3001${url}`)
        return dispatch({
            type: GET_COUNTRY_DETAILS,
            payload: detailRequest.data
        })
    }
}


