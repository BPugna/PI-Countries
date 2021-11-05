import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import Card from "./Card";
import './Cards.css';

function Cards({currenteCountries}){
    let dispatch = useDispatch()
    // let allCountries = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(getCountries())
    },[dispatch]);

    return(
    <div className="containerCards">
                {
        currenteCountries.map(el => {
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
    )
}


export default Cards;