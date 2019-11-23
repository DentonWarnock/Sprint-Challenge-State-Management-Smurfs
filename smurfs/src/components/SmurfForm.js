import React, { useState } from 'react';
import { connect } from "react-redux";
import { addNewSmurf } from '../actions';

const SmurfForm = props => {
    console.log("SmurfForm.js, props: ", props);
    const [input, setInput] = useState({name: "", age: "", height: "", id: Date.now()})

    const handleChange = e => {
        e.preventDefault();
        setInput({...input, [e.target.name]: e.target.value})  
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewSmurf(input);
        setInput({name: "", age: "", height: "", id: Date.now()})
    }

    return (
        <>
            <h2>Add a new smurf</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={input.name}
                    placeholder="New Smurf's Name"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="age"
                    value={input.age}
                    placeholder="New Smurf's Age"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="height"
                    value={input.height}
                    placeholder="New Smurf's Height"
                    onChange={handleChange}
                />
                <button type="submit">Add New Smurf</button>
               
            </form>
        </>
    )
}

export default connect(null, {addNewSmurf})(SmurfForm);