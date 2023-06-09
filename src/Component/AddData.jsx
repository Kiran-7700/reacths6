import React, { useContext } from 'react'
import ContextData from './ContextData';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Students.css";

function AddData() {
    const DataContext = useContext(ContextData);
    const nav = useNavigate();
    return (
        <>
            <div>
                <div className='heading'>
                    <h1>Students Details</h1>
                    <button onClick={() => { nav("/addNew") }}>
                        Add New Student
                    </button>
                </div>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </thead>
                    <tbody>
                        {DataContext.entries.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.Batch}</td>
                                <td>
                                    <Link to="/students/editStudent" state={{data:index}}>
                                        {item.condition}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default AddData;