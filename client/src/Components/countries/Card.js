import React from "react";
import './Card.css';

function Card(props){
    return(
        <div className="containerCard">
            <img src={props.flag} alt="Country Flag"/>
            <h4 className="countryName">{props.name}</h4>
            <h5 className="countryRegion">{props.region}</h5>
        </div>
    )
}


export default Card;