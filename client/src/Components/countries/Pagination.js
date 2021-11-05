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
                       <li key={number} className="listNumber">
                           <button className="paginationButton"
                           type="button" 
                           onClick={()=>paginado(number)}>
                               {number}
                            </button> 
                       </li>
                   )
               })}
           </ul>
       </nav>
    )
}



export default Pagination;