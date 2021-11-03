import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import './Cards.css';


function Cards(){


    const allCountries = useSelector(state => state.countries);


    if(allCountries){
            return(
        <div className="containerCards">
                    {
            allCountries.map(el => {
                return (
                    <Card key={el.name} name={el.name} flag={el.flag} region={el.region}/>
                    )
                })
            }
        </div>
            )} else {
        return(
            <div>
                <h1>Loading Components</h1>
            </div>
        )
    }
}


export default Cards;