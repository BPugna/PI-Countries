import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Card from "./Card";
import './Cards.css';


function Cards(){

    let dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(getCountries())
    },[]);

    if(allCountries){
            return(
        <div className="containerCards">
                    {
            allCountries.map(el => {
                return (
                    <Card key={el.name}
                        id={el.id}
                        name={el.name}
                        flag={el.flag}
                        region={el.region}/>
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