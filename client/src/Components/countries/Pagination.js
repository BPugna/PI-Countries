import React from "react";
import './Pagination.css';



function Pagination({countriesPerPage, allCountries, paginado}){

    const pageNumbers = [];

    for(let i=1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumbers.push(i)
    }

    return(
       <nav>
           <ul className="pagination">
               {pageNumbers.map(number => {
                   return(
                       <li className="listNumber">
                           <input className="paginationButton" type="button" onClick={()=>paginado(number)} value={number} />
                       </li>
                   )
               })}
           </ul>
       </nav>
    )
}



export default Pagination;