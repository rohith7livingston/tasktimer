// LiveTime.js
import React, { useState, useEffect } from 'react';
import './livetime.css'; // Import CSS file
import { CgToday } from 'react-icons/cg'; // Import Icon

const LiveTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        // Cleanup function to clear interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array means it will run only once on mount

    return (
        <div className="time">
            <h1 className='headname'>Live Time:</h1>
            <p>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
};

export default LiveTime;
