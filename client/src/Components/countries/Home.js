import React from 'react';
import { useEffect } from 'react';
import {getCountries} from '../../redux/actions';
import Cards from './Cards';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';

 
function Home(){

    let dispatch = useDispatch()
    
    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries());
    }
    return(
        <div>
            <Pagination/>
            <button onClick={e => handleClick(e)} >Reset</button>
            <Cards/>
        </div>
    )

}



export default Home;