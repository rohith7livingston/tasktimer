import React, { useState } from 'react';
import './tab.css';
import { FaPen } from "react-icons/fa";
import Stopwatch from '../clock/clock';

function Tab() {
    
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    
    const handleNameChange = () => {
        const newName = window.prompt('Enter the name of the task');
        if (newName !== null) {
            setName(newName);
        }
    };
    
    const handleDescChange = (event) => {
        setDesc(event.target.value);
    };

    return (
        <div className='task'>
            <h1 className='taskname'>
                <span onClick={handleNameChange}>
                    {name ? name : <FaPen />}
                </span>
            </h1>
            <div className='container'>
                <Stopwatch />
                
            </div>
            
            <div className='notes'>
                <form>
                    <textarea 
                        rows="4" 
                        cols="20" 
                        className='note' 
                        placeholder=' Add a note...' 
                        value={desc}
                        onChange={handleDescChange}
                    />
                    
                </form>
                <p >{desc}</p>
            </div>
        </div>
    );
}

export default Tab;
