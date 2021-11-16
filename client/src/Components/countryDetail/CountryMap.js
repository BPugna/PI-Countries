import React from "react";
import { useSelector } from "react-redux";
import './CountryMap.css';

function CountryMap(){

    let mapDetail = useSelector(state => state.details)
    console.log("mapDetail: " ,mapDetail)
    return(
        <iframe className="map"
        src={`https://maps.google.com/?ll=${mapDetail.latitude},${mapDetail.longitude}&z=5&t=k&output=embed`}
        height= "350"
        width = "350"
        />
    )
}

export default CountryMap;




