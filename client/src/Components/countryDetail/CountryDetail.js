import React from "react";
import { Link } from "react-router-dom";
import NewData from "./NewData";
import OldData from "./OldData";
import './CountryDetail.css';

function CountryDetail(props){

    
    let url = props.match.url

    return (
        <div className="containerDetails" >
            <Link className="linkDetails" to="/countries">Back</Link>
            <div className="dataContainer">
                <OldData url={url}/>
                <NewData url={url}/>
            </div>
        </div>
    )
}


export default CountryDetail;