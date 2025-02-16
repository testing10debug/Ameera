import React, { useState } from 'react';
import './App.css';

function App() {
  const [showKiss, setShowKiss] = useState(false);

  const handleClick = () => {
    setShowKiss(true);
    new Audio('https://www.soundjay.com/button/beep-07.wav').play(); // sound effect on button click
    setTimeout(() => setShowKiss(false), 1500); // Hide the kiss after 1.5 seconds
  };

  return (
    <div className="app">
      <button className="kiss-button" onClick={handleClick}>
        Blow a Kiss 💋
      </button>
      {showKiss && <div className="kiss-animation">💋</div>}
    </div>
  );
}

export default App;
