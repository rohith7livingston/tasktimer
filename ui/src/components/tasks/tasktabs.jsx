import React  from 'react';
import './tasktabs.css'
const Tab = () =>
{
    return(
        <div className='tabs'>
            <h2 className='taskname' id='taskname'>  Taskname</h2>
            <h2 className='time'> Time</h2>
        </div>
    )
}
export default Tab;