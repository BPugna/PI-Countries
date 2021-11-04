import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import {getCountries} from '../../redux/actions';
import { useDispatch } from 'react-redux';

function Button(){




    return(
        
        <div className="buttonContainer">
            <button className="button">
                <Link className="link" to="/countries">Enter</Link>
            </button>
        </div>
    )
}



export default Button;