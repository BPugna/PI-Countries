import axios from 'axios';

const GET_COUNTRIES = 'GET_COUNTRIES';



async function getCountries(){
    console.log("esto es de la funcion GET COUNTRIES- ACTIONS")
    // return async function(dispatch){
    var request = await axios.get('http://localhost:3001/countries');
    console.log("ESTA ES LA REQUEST: ", request) 
    return {
        type: GET_COUNTRIES,
        payload: request.data
        // }
    }
}

export default getCountries;