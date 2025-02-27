import React, { useState } from 'react';
import './navbar.css';
import Tab from './tabs/tab';
import LiveTime from './livetime'; // Import LiveTime component
import user from './images/user.png';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

const Navbar = () => {
    const [name, setName] = useState("");

    const handleNameChange = () => {
        const newName = window.prompt('Enter your Nick Name');
        if (newName !== null) {
            setName(newName);
        }
    };

    return (
        <div className="banner">
            
            <div className="brand">
                <ul>
                    <li><a href="creative.html">Home</a></li>
                    <li><a href="cr-1.html" target="_top">Timers</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="http://localhost:3000/TaskTimer">Log Out</a></li>
                </ul>
            </div>
            <div className='mod'>
                <div className='profile'>
                    <div className='circle'>
                        <img src={user} alt="User" className='userimg'/>
                    </div>
                    <div className='report'>
                        <h3>Report for</h3>
                    </div>
                    <div className='name'>
                        <h1 className='taskname' onClick={handleNameChange}>
                    {name ? <span>{name}</span> : <span>Enter your Nick Name</span>}
        </h1>
                    </div>

                </div>
                <div className='detail'>
                    {/* Add content for detail section if needed */}
                </div>
                <div className='livetime'>
                    <LiveTime/>
                </div>
                <div className='tabs'>
                    <div className='tab1'>
                        <Tab/>
                        <Tab1/>
                    </div>
                    <div className='tab2'>
                        <Tab2/>
                        <Tab3/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
