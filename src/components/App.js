import React from 'react';
import iLogo from './logo.png';
import './App.css';

import AppPanel from './AddPanel';
import ParticipantList from './ParticipantList';

const App = () => {
   return (
      <div className="app">
         <header className="app-header">
            <img src={iLogo} className="app-logo" alt="logo" />
            <h1 className="app-title">Nord Software</h1>
         </header>
         <div className="participants">
            <h1>List of participants</h1>
            <AppPanel />
            <ParticipantList />
         </div>
      </div>
   );
};

export default App;
