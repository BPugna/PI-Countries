import React from "react";
import { useDispatch } from "react-redux";
import CountrySearch from "./CountrySearch";
import {getCountries} from '../../redux/actions';
import './SearchBar.css';

function SearchBar(){

    let dispatch = useDispatch();

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }


    return(
        <div className="containerSearchBar">
            <CountrySearch/>
            <button onClick={e => handleClick(e)} >Reset</button>
            <div>
                <p>Filter by Region</p>
                <select>
                    <option>A-Z</option>
                    <option>Z-A</option>
                </select>
            </div>
            <div>
                <p>Filter by Population</p>
                <select>
                    <option>ASC</option>
                    <option>DESC</option>
                </select>
            </div>
            <div>
                <p>Filter by name</p>
                <select>
                    <option>A-Z</option>
                    <option>Z-A</option>
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