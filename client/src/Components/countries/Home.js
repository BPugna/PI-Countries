import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cards from './Cards';
import Pagination from './Pagination';
import './Home.css';


function Home(){



    const allCountries = useSelector(state => state.countries);
    const [currentPage, setCurrentePage] = useState(1);
    const [countriesPerPage, setCharacetersPerPage] = useState(9);

    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currenteCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);  

    const paginado = (pageNumber) => {
        setCurrentePage(pageNumber)
    }

    

    return(
        <div>
            <Pagination countriesPerPage = {countriesPerPage}
            allCountries={allCountries.length}
            paginado = {paginado}/>

            <Cards currenteCountries = {currenteCountries}/>
        </div>
    )

}



export default Home;