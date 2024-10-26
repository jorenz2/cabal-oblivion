import React from 'react';
import './App.css';

function App() {
  const handleDownloadClick = () => {
    window.open('https://drive.google.com/file/d/1MZsTzSJ1Tnrwp3r1dSgPpeDy-iMQmU8H/view?usp=drive_link', '_blank'); 
  };

  const handleRegisterClick = () => {
    window.open('https://discord.gg/FA7dRWaJjY', '_blank');
  };

  return (
    <div className="app">
      <h1>Cabal Oblivion</h1>
      <button className="download-button" onClick={handleDownloadClick}>
        Download
      </button>
      <br></br>
      <button className="download-button2" onClick={handleRegisterClick}>
        Register
      </button>
    </div>
  );
}

export default App;