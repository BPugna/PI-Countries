import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountrySearch from "./CountrySearch";
import { filterByActivity, filterByRegion, getCountries, searchActivity} from '../../redux/actions';
import './SearchBar.css';
import { Link } from 'react-router-dom';

function SearchBar({handleSortName, handleSortPopulation}){

    

    let dispatch = useDispatch();
    let activities = useSelector(state => state.activities);

    // console.log("ACTIVITIES: ", activities)

    let nameArrays = [];
    for(let i=0;i<activities.length;i++){
        if(nameArrays.indexOf(activities[i].name) === -1)
        nameArrays.push(activities[i].name);
    }
    // console.log("NAME ARRAYS: ", nameArrays)

    useEffect(() => {
        dispatch(filterByActivity())
    },[dispatch]);


    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }

    function handleFilterRegion(e){
        e.preventDefault();
        dispatch(filterByRegion(e.target.value))
    }

    function handleOnChange(e){
        e.preventDefault()
        dispatch(searchActivity(e.target.value))
    }
    return(
        <div className="containerSearchBar">
            <CountrySearch/>
            <button onClick={e=>handleClick(e)}>Reset</button>
            <div>
                <p>Filter by Region</p>
                <select onChange={e => handleFilterRegion(e)}>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
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
                <select onChange={e => handleOnChange(e)}>
                    {
                        nameArrays.map(el => {
                            return (
                                <option key={el} value={el}> {el} </option>
                            )
                        })
                    }
                </select>
            </div>
            <Link to="/activity">
                <button>Create Activity</button>
            </Link>
        </div>
    )
}


export default SearchBar;