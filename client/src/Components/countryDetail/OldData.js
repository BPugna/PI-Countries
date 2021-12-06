import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetails } from "../../redux/actions";
import './OldData.css';
import CountryMap from './CountryMap';

function OldData({url}){

    let dispatch = useDispatch()

    useEffect(()=>{ 
        dispatch(getCountriesDetails(url))
    },[])

    let OldDetails = useSelector(state => state.details)


    return( 
        <div>
            <div className="containerOD">
                <img className="imgOD" src={OldDetails.flag} alt={`${OldDetails.name} flag`}/>
                <h1 className="nameOD">{OldDetails.name}</h1>
                <h2 className="regionOD">{OldDetails.region}</h2>
            </div> 
            <div>
                <CountryMap/>
            </div>
        </div>
    )
}



export default OldData;