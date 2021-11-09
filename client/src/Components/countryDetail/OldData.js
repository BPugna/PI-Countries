import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetails } from "../../redux/actions";
import './OldData.css';


function OldData({url}){

    let dispatch = useDispatch()

    useEffect(()=>{ 
        dispatch(getCountriesDetails(url))
    })

    let OldDetails = useSelector(state => state.details)


    return(
        <div>
            <div className="containerOD">
                <img src={OldDetails.flag} alt={`${OldDetails.name} flag`}/>
                <h1>{OldDetails.name}</h1>
                <h2>{OldDetails.id}</h2>
                <h2>{OldDetails.region}</h2>
            </div>  
        </div>
    )
}



export default OldData;