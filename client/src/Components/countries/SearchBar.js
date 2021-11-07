import React from "react";
import { useDispatch } from "react-redux";
import CountrySearch from "./CountrySearch";
import {getCountries, orderByName} from '../../redux/actions';
import './SearchBar.css';

function SearchBar({handleSortName, handleSortPopulation}){

    let dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }
    //TODO PUEDO SACAR ELE BOTON DE RESET -XD-

    return(
        <div className="containerSearchBar">
            <CountrySearch/>
            <button onClick={e=>handleClick(e)}>Reset</button>
            <div>
                <p>Filter by Region</p>
                <select>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            <div>
                <p>Filter by Population</p>
                <select onChange={e=>handleSortPopulation(e)}>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </select>
            </div>
            <div>
                <p>Filter by name</p>
                <select onChange={e => handleSortName(e)}>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            <div>
                <p>Filter by Activity</p>
                <select>
                    <option>A-Z</option>
                    <option>Z-A</option>
                </select>
            </div>
        </div>
    )
}


export default SearchBar;