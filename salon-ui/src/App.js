import React from 'react';
import './App.css';
import ChooseService from './ChooseService.js';
import LoadingIndicatorComponent from './loading-indicator-component.js';
import AppNotificationComponent from './AppNotificationComponent';

function App() {
  return (
    <div>
    <LoadingIndicatorComponent/>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">Ar Salon & Day Spa</a>
      </nav>
      <main role="main" className="container">
        <div className="padding-container">
            <ChooseService/>
        </div>
      </main>
        <AppNotificationComponent/>
    </div>

  );
}

export default App;
