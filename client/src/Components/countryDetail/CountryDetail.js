import React, { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCountriesDetails } from "../../redux/actions";
import NewData from "./NewData";
import OldData from "./OldData";


function CountryDetail(){

    let dispatch = useDispatch();
    let data = useSelector(state => state.lastDetails)
    console.log("ESTA ES LA DATA",data)
    
    useEffect(()=>{
        dispatch(getCountriesDetails("ven"))
    },[dispatch])

    /*
    TODO  
        Tengo que traerme la parte de url referente al pais, se lo paso a getCountrisDetails
    Todo 
        Y lo mando por props a OldData y NewData para que lo muestren. 

     */

    return (
        <div>
            <OldData/>
            <NewData/>
        </div>
    )
}


export default CountryDetail;