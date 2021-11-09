import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetails } from "../../redux/actions";
import CountryActivities from "./CountryActivities";
import './NewData.css';

function NewData({url}){

    let dispatch = useDispatch()
    let country = useSelector(state => state.allCountries)
    
    console.log("este es el countre: ",country )
    useEffect(()=>{
        dispatch(getCountriesDetails(url))
    },[])
    
    let newDetails = useSelector(state => state.details)
    console.log("new details; ", newDetails)
    return(
        <div className="containerND">
            <h2>Alpha3: {newDetails.id}</h2>
            <h2>Capital: {newDetails.capital}</h2>
            <h3>Subregion: {newDetails.subregion}</h3>
            <h3>Area (km2): {newDetails.area}</h3>
            <h3>Population: {newDetails.population}</h3>
            <CountryActivities data={newDetails.activities}/>
        </div> 
    )
}


export default NewData;