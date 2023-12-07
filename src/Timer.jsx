import { useState, useEffect } from 'react';
import '/src/styles.css';

const Timer = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log('Timer component mounted');
    const myInterval = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else { 
          if (minutes === 0) { 
            clearInterval(myInterval);
            setShowPopup(true);
            // alert("You've been on the website for 5 minutes!");
          } else {
            setMinutes(prevMinutes => prevMinutes - 1);
            return 59;
          }
        }
      });
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [minutes]);

  const closePopup = () => {
    setShowPopup(false);
    setMinutes(1);
    setSeconds(0);
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <p>You've been on the website for 5 minutes!</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </>
  );
};

export default Timer;