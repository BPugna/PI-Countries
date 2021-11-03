import React from 'react';
import { useEffect } from 'react';
import getCountries from '../../redux/actions';
import Cards from './Cards';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';

 
function Home(){

    let dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    
    useEffect(() => {
        dispatch(getCountries);
        console.log("Dispatch dentro de useEffect")
    },[allCountries]);
    
        return(
            <div>
                <Pagination/>
                <Cards/>
            </div>
        )

}



export default Home;