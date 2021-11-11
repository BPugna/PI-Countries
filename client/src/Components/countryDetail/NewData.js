import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetails } from "../../redux/actions";
import CountryActivities from "./CountryActivities";
import './NewData.css';

function NewData({url}){

    let dispatch = useDispatch()
    
    useEffect(()=>{ 
        dispatch(getCountriesDetails(url))
    },[])
    
    let newDetails = useSelector(state => state.details)

    return(
        <div className="containerND">
            <h2 className="alphaND">Alpha3: <p className="pStyles">{newDetails.id}</p></h2>
            <h2 className="capitalND">Capital: <p className="pStyles">{newDetails.capital}</p></h2>
            <h3 className="subregionND">Subregion: <p className="pStyles">{newDetails.subregion}</p></h3>
            <h3 className="areaND">Area:<p className="pStyles">{newDetails.area} (km2)</p></h3>
            <h3 className="populationND">Population: <p className="pStyles">{newDetails.population} Pop.</p></h3>
            <CountryActivities data={newDetails.activities}/>
        </div> 
    )
}


export default NewData;