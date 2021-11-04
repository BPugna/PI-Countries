import axios from 'axios';

const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';


 
export function getCountries(){
    return async function(dispatch){
    var request = await axios.get('http://localhost:3001/countries');
    return dispatch({
        type: GET_COUNTRIES,
        payload: request.data
        // }
        })
    }
}

// export async function getCountriesDetails(){
//     console.log("ACTION DE GET :ID")
//     let detailRequest = await axios.get("http://localhost:3001/countries/:id")
//     return {
//         type: GET_COUNTRY_DETAILS,
//         payload: detailRequest.data
//     }
// }


