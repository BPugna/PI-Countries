import React, { useState } from 'react';
import './Principal.css';
import {useDispatch, useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import { orderByName, orderByPopulation } from '../../redux/actions';
import Pagination from './Pagination';
import Cards from './Cards';


function Principal(){

    let dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    
    const [currentPage, setCurrentePage] = useState(1);
    const [countriesPerPage] = useState(9); 
    const [order, setOrder] = useState('');

    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currenteCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);  

    const paginado = (pageNumber) => {
        setCurrentePage(pageNumber)
    }

    function handleSortName(e){
        e.preventDefault(e);
        dispatch(orderByName(e.target.value));
        setCurrentePage(1);
        setOrder(`Order ${e.target.value}`);
    }

    function handleSortPopulation(e){
        e.preventDefault(e);
        dispatch(orderByPopulation(e.target.value));
        setCurrentePage(1);
        setOrder(`Population Order ${e.target.value}`);
    }
    
    return(
        <>
            <SearchBar 
                handleSortName={handleSortName} 
                handleSortPopulation={handleSortPopulation}
            />
            <Pagination 
                countriesPerPage = {countriesPerPage}
                allCountries={allCountries.length}
                paginado = {paginado}
            />
            <Cards
                currenteCountries = {currenteCountries}
            />
        </>
    )
}


export default Principal;