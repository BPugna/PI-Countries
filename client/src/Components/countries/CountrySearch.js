import React, { useState } from "react";



function CountrySearch(){

    const [searchCountry, setSearchCountry] = useState("");

    return(
        <div>
            <input placeholder="Search Country" onChange={e => setSearchCountry(e.target.value)}/>
            <button>Search</button>
        </div>    
        )
}


export default CountrySearch;