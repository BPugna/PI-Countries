import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';

function Card(props){
    return(
        <Link to={`/countries/${props.id}`} className="containerCard">
            <img src={props.flag} alt="Country Flag"/>
            <h4 className="countryName">{props.name}</h4>
            <h5 className="countryRegion">{props.region}</h5>
        </Link>
    )
}


export default Card;