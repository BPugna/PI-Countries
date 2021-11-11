import React from "react";
import './CountryActivities.css';
import {Link} from 'react-router-dom';

function CountryActivities({data}){

    
    return(
        <div className="containerCA">
            <h1 className="titleCA">Country Activities</h1> 
            {
                data?.map(act => {
                    return(
                        <div className="caractCA" key={act.name}>
                            <h3>Name: {act.name}</h3>
                            <h4>Difficulty: {act.difficulty}</h4>
                            <h4>Duration: {act.duration} hrs</h4>
                            <h4>Season: {act.season}</h4>
                        </div>
                    )
                }) 
            }
            <Link className="linkCA" to="/activity">Crear Actividad</Link>
        </div>
    )

}


export default CountryActivities;