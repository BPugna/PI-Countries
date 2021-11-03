import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import getCountries from '../../redux/actions';
import { useDispatch } from 'react-redux';

function Button(){

    const dispatch = useDispatch();

    
    const handleOnClick = async () => {
        console.log("BOTOOOOOOOOOOOOOOOOOOOOOON")
        console.log("ANTES DEL AWAIT")
        let a = await getCountries().then(res => res);
        console.log("DESPUES DEL AWAIT: ", a)
        dispatch(a);
    }

    // <button className="button" onClick={(e)=>{handleOnClick(e)}}>
    return(
        
        <div className="buttonContainer">
            <button className="button" onClick={()=>{handleOnClick()}}>
                <Link className="link" to="/countries">Enter</Link>
            </button>
        </div>
    )
}



export default Button;