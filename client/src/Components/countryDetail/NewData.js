import React from "react";
import CountryActivities from "./CountryActivities";
import './NewData.css';

function NewData(){
    return(
        <div className="containerND">
            <h2>Codigo de 3 letras</h2>
            <h2>Capital</h2>
            <h3>SubRegion</h3>
            <h3>Area mostrrla en km2</h3>
            <h3>Poblacion</h3>
            <CountryActivities/>
        </div>
    )
}


export default NewData;