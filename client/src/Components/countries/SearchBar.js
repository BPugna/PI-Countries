import React from "react";
import CountrySearch from "./CountrySearch";
import './SearchBar.css';

function SearchBar(){
    return(
        <div className="containerSearchBar">
            <CountrySearch/>
            <h4>Filters</h4>
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