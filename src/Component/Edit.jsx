import React,{ useContext } from 'react';
import ContextData from './ContextData';
import { useLocation, useNavigate } from 'react-router-dom';

function Edit() {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();
    const location = useLocation().state.data;

    const currData = {
        Name: DataContext.entries[location].Name,
        age: DataContext.entries[location].age,
        course: DataContext.entries[location].course,
        Batch: DataContext.entries[location].Batch,
        condition:DataContext.entries[location].condition
    }
    const handleAddFormChange = (e) => {
        currData[e.target.name] = e.target.value;
    }

    const handleAddFormSubmit = () => {
        DataContext.entries[location]=currData;
        nav(-1)
    }
    return (
        <>
            <div>
                <div className='inputTags'>
                    <div class="text-field">
                        <input type="text" required
                            name='Name'
                            placeholder={DataContext.entries[location].Name}
                            onChange={handleAddFormChange} />
                        <label>Name</label>
                    </div>
                    <div class="text-field">
                        <input type="number" required
                            name='age'
                            placeholder={DataContext.entries[location].age}
                            onChange={handleAddFormChange} />
                        <label>Age</label>
                    </div>
                    <div class="text-field">
                        <input type="text" required
                            name='course'
                            placeholder={ DataContext.entries[location].course}
                            onChange={handleAddFormChange} />
                        <label>Course</label>
                    </div>
                    <div class="text-field">
                        <input type="text" required
                            name='Batch'
                            placeholder={DataContext.entries[location].Batch}
                            onChange={handleAddFormChange} />
                        <label>Batch</label>
                    </div>
                </div>
                <div className='buttons'>
                    <button onClick={() => { nav(-1) }}>Cancel</button>
                    <button onClick={() => {
                        handleAddFormSubmit();
                    }}>Update</button>
                </div>
            </div>
        </>
    )
}

export default Edit;