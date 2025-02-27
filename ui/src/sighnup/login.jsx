import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
// import TaskTimer from '../TaskTimer/TaskTimer';
const LogIn = () => {
    return(
        <div className="main">
            <form className='main2'>
                <h1>Sign Up</h1>
                <div className="ib">
                    <input type="text" placeholder="First Name" required/>
                </div>
                <div className="ib">
                    <input type="text" placeholder="Last Name" required/>
                </div>
                <div className="ib">
                    <input type="email" placeholder="Enter Email" required/>
                </div>
                <div className="ib">
                    <input type="text" placeholder="Enter Password" required/>
                </div>
                <button className='btn' ><Link to="/TaskTimer">Sighn in</Link></button>
            </form>
        </div>
    );
}
export default LogIn;