import React from "react";
import { Link } from 'react-router-dom';
import Form from "./Form";
import AddCountry from "./AddCountry";

function ActivityForm(){
    return (
        <div>
            <Link to="/countries">{`< Back`}</Link>
            <Form/>
            <AddCountry/>
            <button>Submit</button>
        </div>
    )
}


export default ActivityForm;

