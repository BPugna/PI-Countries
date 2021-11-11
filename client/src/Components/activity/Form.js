import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivity, postActivity } from "../../redux/actions";
import './Form.css';

function Form(){

    let dispatch = useDispatch();

    let countries = useSelector(state => state.allCountries)
    let redirect = useHistory();
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: []
    })

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    function handleCheck(e){
        if(e.target.checked){
            setForm({
                ...form,
                season : e.target.value
            })
        }
    }

    function handleSelect(e){
        setForm({
            ...form,
            countryId : [...form.countryId, e.target.value]
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivity(form));
        alert("Activity created successfully")
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        })
        redirect.push('/countries');
    }

    function onListClick(e){
        e.preventDefault();
        let filtered = form.countryId.filter(el => {
            return(
                el !== e.target.name
            )
        })
        setForm({
            ...form,
            countryId : filtered
        })
    }


    useEffect(()=> {
        dispatch(filterByActivity())
    },[dispatch])


    return(
        <div className="formPage">
            <div className="formContainer">
                <Link className="linkForm" to="/countries">Back</Link>

                <form onSubmit={e => handleSubmit(e)}>
                    <fieldset className="fieldset">

                        <legend> Create your Activity </legend>
                        <label>Name</label>
                        <input type="text" 
                        value={form.name} 
                        name="name" 
                        onChange={e=> handleChange(e)} 
                        required/>
                        <br/>

                        <label>Difficulty</label>
                        <input 
                        type="number" 
                        value={form.difficulty}
                        name="difficulty" 
                        onChange={e=> handleChange(e)} 
                        max="5"
                        min="1"
                        required/>
                        <br/>

                        <label>Duration</label>
                        <input 
                        type="number" 
                        value={form.duration} 
                        name="duration" 
                        onChange={e=> handleChange(e)} 
                        max="24"
                        min="0"
                        required/>
                        <br/>
                    </fieldset>

                    
                    <fieldset className="activitySeason">
                        <legend>Activity Season </legend>
                        <label>
                            <input
                            type="radio"
                            id="Summer"
                            name="season"
                            value="Summer"
                            onClick={e => handleCheck(e)}
                            required
                            />
                            Summer
                        </label>
                        <label>
                            <input
                            type="radio"
                            id="Winter"
                            name="season"
                            value="Winter"
                            onClick={e => handleCheck(e)}
                            />
                            Winter
                        </label>
                        <label>
                            <input
                            type="radio"
                            id="Autumn"
                            name="season"
                            value="Autumn"
                            onClick={e => handleCheck(e)}
                            />
                            Autumn
                        </label>
                        <label >
                            <input 
                            type="radio"
                            id="Spring"
                            name="season"
                            value="Spring"
                            onClick={e => handleCheck(e)}
                            />
                            Spring
                        </label>
                    </fieldset>
                    <select className="countrySelector" onChange={e => handleSelect(e)}>
                    <option>-</option>
                    {
                        countries.map(el => {
                            return(
                                <option  key={el.name} value={el.id}>{el.name}</option>
                            )
                        })
                    }
                    </select>
                    <ul className="ulForm">
                        
                        {
                            form.countryId.map(el => {
                                return(
                                    <div className="divForm" key={el}>
                                        <li className="liForm">
                                            {el}
                                        </li>
                                        <input className="liButton" onClick={e => onListClick(e)} type="button" value="X" name={el}/>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <button className="createButton" type="submit">Create ACtivity</button>        
                </form>
            </div>
        </div>
    )
}


export default Form;