
import React, { useState, useRef } from 'react';
import './clockex.css'; // Assuming you have your CSS file imported here

function Stopwatch() {
  const [timer, setTimer] = useState(false);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [count, setCount] = useState(0);

  const intervalRef = useRef(null);

  const startWatch = () => {
    setTimer(true);
    intervalRef.current = setInterval(updateTime, 10);
  };

  const stopWatch = () => {
    setTimer(false);
    clearInterval(intervalRef.current);
  };

  const resetWatch = () => {
    setTimer(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
    setCount(0);
  };

  const updateTime = () => {
    setCount(prevCount => {
      if (prevCount === 99) {
        setSecond(prevSecond => {
          if (prevSecond === 59) {
            setMinute(prevMinute => {
              if (prevMinute === 59) {
                setHour(prevHour => prevHour + 1);
                return 0;
              } else {
                return prevMinute + 1;
              }
            });
            return 0;
          } else {
            return prevSecond + 1;
          }
        });
        return 0;
      } else {
        return prevCount + 1;
      }
    });
  };

  return (
    <div className="container">
      <h1 className="head">The choosen! <br />Stop Watch</h1>
      <div id="time">
        <span className="digit">{hour < 10 ? '0' + hour : hour}</span>
        <span className="txt">:</span>
        <span className="digit">{minute < 10 ? '0' + minute : minute}</span>
        <span className="txt">:</span>
        <span className="digit">{second < 10 ? '0' + second : second}</span>
        <span className="txt"></span>
      </div>
      <div id="buttons">
        <button className="btn2"id='start' onClick={startWatch}>Start</button>
        <button className="btn2" id='stop' onClick={stopWatch}>Stop</button>
        <button className="btn2" id='reset' onClick={resetWatch}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;

