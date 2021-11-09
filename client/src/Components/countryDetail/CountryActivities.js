import React from "react";
import './CountryActivities.css';
import {Link} from 'react-router-dom';

function CountryActivities({data}){

    console.log("data: ",data)

    
    return(
        <div className="containerCA">
            <h1>Actividades del pais</h1>
            {
                data?.map(act => {
                    return(
                        <div key={act.name}>
                            <h3>{act.name}</h3>
                            <h4>{act.difficulty}</h4>
                            <h4>{act.duration}</h4>
                            <h4>{act.season}</h4>
                        </div>
                    )
                }) 
            }
            <Link to="/activity">Crear Actividad</Link>
        </div>
    )

}


export default CountryActivities;