import React from "react";
import { Link } from "react-router-dom";
// import {useDispatch, useSelector} from 'react-redux';
// import { getCountriesDetails } from "../../redux/actions";
import NewData from "./NewData";
import OldData from "./OldData";



function CountryDetail(props){

    let url = props.match.url


    // let matcher = url.split("/")[2].toUpperCase();
    // let state = useSelector(state => state.countries);
    // let searcher = state.filter(st => st.id === matcher);

    // console.log("ESTE ES EL SEARCHER: ",searcher)



    return (
        <div>
            <Link to="/countries">Back</Link>
            <OldData url={url}/>
            <NewData url={url}/>
        </div>
    )
}


export default CountryDetail;