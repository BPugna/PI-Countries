import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesDetails } from "../../redux/actions";
import './OldData.css';


function OldData(){


    // const [estado, useEstado] = useState([]);
    // let dispatch = useDispatch()
    // useEstado("el valor del param")
    
    // useEffect(()=>{
    //     dispatch(getCountriesDetails(estado))
    // },[dispatch])

    // return(
    //     <div className="containerOD">
    //         <img src={estado.flag} alt={`Bandera de ${estado.name}`}/>
    //         <h1>{estado.name}</h1>
    //         <h2>{estado.id}</h2>
    //         <h2>{estado.region}</h2>
    //     </div>
    //     )

    return(
        <div>
            <div className="containerOD">
                <img src="#" alt="algo"/>
                <h1>el.name</h1>
                <h2>Codigo de 3 Letras</h2>
                <h2>COntinente</h2>
            </div>  
        </div>
    )
}



export default OldData;