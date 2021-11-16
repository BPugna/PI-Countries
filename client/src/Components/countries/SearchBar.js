import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountrySearch from "./CountrySearch";
import { filterByActivity, filterByRegion, getCountries, searchActivity} from '../../redux/actions';
import './SearchBar.css';
import { Link } from 'react-router-dom';

function SearchBar({handleSortName, handleSortPopulation, setCurrentePage}){

    
    
    let dispatch = useDispatch();
    let activities = useSelector(state => state.activities);

    let nameArrays = [];
    for(let i=0;i<activities.length;i++){
        if(nameArrays.indexOf(activities[i].name) === -1)
        nameArrays.push(activities[i].name);
    }

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
        setCurrentePage(1)
    }

    function handleOnChange(e){
        e.preventDefault()
        dispatch(searchActivity(e.target.value))
    }
    return(
        <div className="containerSearchBar">

            <CountrySearch/>

            <button className="resetButton" onClick={e=>handleClick(e)}>Reset</button>

            <div className="containerFilter">
                <p className="filtersName">Filter by Region</p>
                <select className="filterInput" onChange={e => handleFilterRegion(e)}>
                    <option value="All">All</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

            <div className="containerFilter">
                <p className="filtersName" >Filter by Population</p>
                <select className="filterInput" onChange={e=>handleSortPopulation(e)}>
                    <option>-</option>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </select>
            </div>

            <div className="containerFilter">
                <p className="filtersName">Filter by name</p>
                <select className="filterInput" onChange={e => handleSortName(e)}>
                    <option>-</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
            
            <div>
                {
                    nameArrays.length === 0 ?
                    <div></div> :
                    (
                    <div className="containerFilter">
                        <p className="filtersName">Filter by Activity</p>
                        <select className="filterInput" onChange={e => handleOnChange(e)}>
                        <option>-</option>
                            {
                            nameArrays.map(el => {
                                return (
                                <option key={el} value={el}> {el} </option>
                                    )
                                })
                            }
                        </select>
                    </div> 
                    )
                }
                
            </div>
            <Link to="/activity">
                <button className="activityButton">Create Activity</button>
            </Link>
        </div>
    )
}


export default SearchBar;