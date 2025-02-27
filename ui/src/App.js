import React from 'react';
import './App.css'
import LogIn from './sighnup/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskTimerModal from './TaskTimer/TaskTimer';
import Profile from './dashboard/profile';

function App()
{
  return(
    <Router>
        <Routes>
          <Route path="/" element={<TaskTimerModal/>} />
          <Route path="/signup" element={<LogIn />} />
          <Route path="/Profile" element={<Profile/>}/>
          <Route  path="/TaskTimer" element={<TaskTimerModal/>}/>
        </Routes>

    </Router>
  )

}
export default App;