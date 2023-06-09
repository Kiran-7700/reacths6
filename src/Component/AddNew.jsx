import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContextData from './ContextData';

function AddNew() {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();
    const newObj = {
        Name: "",
        age: "",
        course: "",
        Batch: "",
        condition:"Edit"
    }
    const handleAddFormChange = (e) => {
        newObj[e.target.name] = e.target.value;
    }
    const handleAddFormSubmit = () => {
        DataContext.entries.push(newObj);
        nav(-1)
    }
    return (
        <>
            <div>
                <div className='inputTags'>
                    <div class="text-field">
                        <input type="text" required name='Name'
                            onChange={handleAddFormChange} />
                        <label>Name</label>
                    </div>
                    <div class="text-field">
                        <input type="number" required name='age'
                            onChange={handleAddFormChange} />
                        <label>Age</label>
                    </div>
                    <div class="text-field">
                        <input type="text" required name='course'
                            onChange={handleAddFormChange} />
                        <label>Course</label>
                    </div>
                    <div class="text-field">
                        <input type="text" required name='Batch'
                            onChange={handleAddFormChange} />
                        <label>Batch</label>
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={() => { nav(-1) }}>Cancel</button>
                    <button onClick={() => {
                        handleAddFormSubmit();
                    }}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddNew