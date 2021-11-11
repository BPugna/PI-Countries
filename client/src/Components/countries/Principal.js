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
    let countriesPerPage = 9;
    
    const [currentPage, setCurrentePage] = useState(1);
    const [order, setOrder] = useState('all');

    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currenteCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);  


    function paginado(pageNumber){
        setCurrentePage(pageNumber)
    }

    function handleSortName(e){
        e.preventDefault(e);
        dispatch(orderByName(e.target.value));
        setOrder(`Order ${e.target.value}`);
        setCurrentePage(1);
    }

    function handleSortPopulation(e){
        e.preventDefault(e);
        dispatch(orderByPopulation(e.target.value));
        setOrder(`Population Order ${e.target.value}`);
        setCurrentePage(1);
    }
    
    return(
        < div className="contenedor" >
            <SearchBar 
                handleSortName={handleSortName} 
                handleSortPopulation={handleSortPopulation}
                setCurrentePage = {setCurrentePage}
            />
            <Pagination 
                countriesPerPage = {countriesPerPage}
                allCountries={allCountries.length}
                paginado = {paginado}
            />
            <Cards
                currenteCountries = {currenteCountries}
            />
        </div>
    )
}


export default Principal;