import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions";


function CountrySearch(){

    let dispatch = useDispatch()
    const [searchCountry, setSearchCountry] = useState("");
    // console.log("este es searchCountry: ",searchCountry)

    function changeHandler(e){
        e.preventDefault();
        setSearchCountry(e.target.value);
    }
    console.log(searchCountry)

    function submitHandler(e){
        e.preventDefault()
        dispatch(searchByName(searchCountry))
    }
    return(
        <div>
            <input type="text" placeholder="Search Country" onChange={e => changeHandler(e)}/>
            <button onClick={e => submitHandler(e)}>Search</button>
        </div>    
        )
}


export default CountrySearch;