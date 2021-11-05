import React from "react";
import './CountryActivities.css';


function CountryActivities({data}){


    // if(!data.length){
    //     return(
    //         <div>
    //             <h1>Este pais no tiene actividades cargadas</h1>
    //         </div>
    //     )
    // }else 
return(
        <div>
            <h1>Problemitas tecnicos con las actividades</h1>
            {/* {
                data.map(act => {
                    <div>
                        <h3>{act.name}</h3>
                        <h4>{act.difficulty}</h4>
                        <h4>{act.duration}</h4>
                        <h4>{act.season}</h4>
                    </div>
                })
            } */}
        </div>
    )

}


export default CountryActivities;