import React, { useState } from 'react';
import './dashboard.css';
import Tab from './components/tasks/tasktabs';
import { FiAlignJustify } from "react-icons/fi";
import { CgSomeIcon } from 'react-icons/cg';

function Dashboard() {
    return (
        <div className='dash'>
            <div className='navbar'>
            <div className='logo'> <h1> The choosen</h1> </div>
            </div>
            <div className='profile'>
                <h4>Welcome<br/>Your report</h4>
            </div>
            <div className='tasks'>
                <div className='tasktab1'>
                    <Tab/>
                    <Tab/>
                </div>
                <div className='tasktab2'>
                    <Tab/>
                    <Tab/>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;
