import axios from 'axios';

const GET_COUNTRIES = 'GET_COUNTRIES';
const SEARCH_BY_NAME = 'SEARCH_BY_NAME';
const FILTER_BY_REGION = 'FILTER_BY_REGION';
const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';
const ORDER_BY_NAME = 'ORDER_BY_NAME';
const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
const SEARCH_ACTIVITY = 'SEARCH_ACTIVITY';


export function getCountries(){
    return async function(dispatch){
        try{
            let request = await axios.get('http://localhost:3001/countries');
            return dispatch({
                type: GET_COUNTRIES,
                payload: request.data
                })

        } catch(error){
            console.log("Error get countries: ",error);
        }
    } 
}

export function searchByName(name){
    return async function(dispatch){
        try { 
            let requeest = await axios.get(`http://localhost:3001/countries?name=${name}`)
            return dispatch({
                type: SEARCH_BY_NAME,
                payload: requeest.data
            }); 
        } catch (error){
            console.log("Error search by name: ",error)
        };
    }; 
};

export function filterByRegion(region){
    return{ 
        type: FILTER_BY_REGION,
        payload: region
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

export function searchActivity(activity){
    return{
        type: SEARCH_ACTIVITY,
        payload: activity
    }
}

export function filterByActivity(){
    return async function(dispatch){
        let info = await axios.get("http://localhost:3001/activity")
        return dispatch({
            type: FILTER_BY_ACTIVITY,
            payload: info.data
        })
    }
}

export function postActivity(data){
    return async function(dispatch){
        let info = await axios.post("http://localhost:3001/activity",data)
        return info;
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


