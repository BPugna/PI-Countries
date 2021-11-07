import axios from 'axios';

const GET_COUNTRIES = 'GET_COUNTRIES';
const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
const ORDER_BY_NAME = 'ORDER_BY_NAME';
const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
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

export function searchByName(name){
    console.log("ESTE ES SEARCH BY NAME: ",name)
    return {
        type : SEARCH_BY_NAME,
        payload: name
    }
}

export function orderByPopulation(order){
    return{
        type: ORDER_BY_POPULATION,
        payload: order
    }
}

export function orderByName(order){
    return{
        type: ORDER_BY_NAME,
        payload: order
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


