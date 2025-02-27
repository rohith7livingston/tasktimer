import React, { useState } from 'react';
import './TaskTimer.css';
import LogIn from '../sighnup/login';
import {  Link } from 'react-router-dom';
import ParticlesComponent from '../dashboard/particles/Particles';
const TaskTimer = () => {
    const [showLogin, setShowLogin] = useState(false);

    return(
        <div className="wrapper">
            <ParticlesComponent/>
            <form>
                <div className='text-one'>
                    Welcome <span>To</span> <span className='span1'>Task</span> <span className='span2'>Timer</span>
                </div>

                <div className="text-two">It's Always About Timing</div>

                <div className="input-box">
                    <input type="text" placeholder="Enter your name" required></input>
                </div>
                
                <button className='button'><Link to ="/Profile" >Get Started</Link></button>
                <button className='button2' >
                    <Link to="/signup">Sign Up</Link></button>

                {showLogin && <LogIn />}
            </form>
        </div>
    );
}

export default TaskTimer;