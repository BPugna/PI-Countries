import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterByActivity, postActivity } from "../../redux/actions";
import './Form.css';

function Form(){

    let dispatch = useDispatch();
    let activities = useSelector(state => state.activities);
    console.log("ESTAS SON LAS ACTIVITIES DEL FORMULARIO: ",activities)
    let countries = useSelector(state => state.allCountries)
    let redirect = useHistory();
    const [form, setForm] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countryId: []
    })
    console.log("este es el form: ", form)

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
        alert("Activity creada")
        setForm({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: []
        })
        redirect.push('/countries');
    }

    useEffect(()=> {
        dispatch(filterByActivity())
    }, [])


    return(
        <div>

                <Link to="/countries">Back</Link>

            <form onSubmit={e => handleSubmit(e)}>
                <fieldset className="fieldset">
                    <legend> Create your Activity </legend>
                    <label>Name</label>
                    <input type="text" value={form.name} name="name" onChange={e=> handleChange(e)} required/>
                    <br/>
                    <label>Difficulty</label>
                    <input type="number" value={form.difficulty} name="difficulty" onChange={e=> handleChange(e)} required/>
                    <br/>
                    <label>Duration</label>
                    <input type="number" value={form.duration} name="duration" onChange={e=> handleChange(e)} required/>
                    <br/>
                </fieldset>

                <fieldset className="fieldset">
                    <legend>Activity Season </legend>
                    <label>
                        <input
                        type="checkbox"
                        name="Summer"
                        value="Summer"
                        onClick={e => handleCheck(e)}
                        />
                        Summer</label>
                        <label>
                        <input
                        type="checkbox"
                        name="Winter"
                        value="Winter"
                        onClick={e => handleCheck(e)}
                        />
                        Winter</label>
                        <label>
                        <input
                        type="checkbox"
                        name="Autumn"
                        value="Autumn"
                        onClick={e => handleCheck(e)}
                        />
                        Autumn</label>
                        <label>
                        <input
                        type="checkbox"
                        name="Spring"
                        value="Spring"
                        onClick={e => handleCheck(e)}
                        />
                        Spring</label>
                </fieldset>
                <select onChange={e => handleSelect(e)}>
                {
                    countries.map(el => {
                        return(
                            <option  key={el.name} value={el.id}>{el.name}</option>
                        )
                    })
                }
                </select>
                <ul>
                    
                    {
                        form.countryId.map(el => {
                            return(
                                <li key={el}>
                                    {el}
                                </li>
                            )
                        })
                    }
                </ul>
                <button type="submit">Create!</button>        
            </form>
        </div>
    )
}


export default Form;