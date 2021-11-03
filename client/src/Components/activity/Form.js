import React from "react";

function Form(){
    return(
        <form>
            <fieldset>
                <legend> Create your Activity </legend>
                <label for="name">Name</label>
                <input type="text" id="name" name="name"/>
                <br/>
                <label for="difficulty">Difficulty</label>
                <input type="number" id="difficulty" name="difficulty"/>
                <br/>
                <label for="duration">Duration</label>
                <input type="number" id="duration" name="duration"/>
                <br/>
                <label for="season">Season</label>
                <input type="checkbox" id="season" name="season"/>
            </fieldset>
        </form>
    )
}


export default Form;