import React from 'react'; 
import { useState, useEffect } from 'react';
import '/src/styles.css';

const Timer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else { 
        if (minutes === 0) { 
          clearInterval(myInterval);
          // Add code to display the popup warning here
          alert("You've been on the website for 5 minutes!");
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(myInterval);
  }, [minutes, seconds]);

  return (
    <div className="timer">
      {minutes === 0 && seconds === 0 ? null : (
        <h1>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h1>
      )}
    </div>
  ); 
};

export default Timer;