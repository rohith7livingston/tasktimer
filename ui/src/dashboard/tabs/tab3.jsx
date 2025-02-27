import React, { useState } from 'react';
import './tab.css';
import { FaPen } from "react-icons/fa";
import Stopwatch from '../clock/clock';

function Tab3() {
    const [name, setName] = useState("");

    const handleNameChange = () => {
        const newName = window.prompt('Enter the name of the task');
        if (newName !== null) {
            setName(newName);
        }
    };

    return (
        <div className='task3'>
            <h1 className='taskname'>
                <span onClick={handleNameChange}>
                    {name ? name : <FaPen />}
                </span>
            </h1>
            <div className='container'>
                <Stopwatch />
            </div>
            <div className='notes'>
                
                <textarea rows="4" cols="20" className='note' placeholder=' Add a note...' />
            </div>
        </div>
    );
}

export default Tab3;
