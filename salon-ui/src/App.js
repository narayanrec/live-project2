import React from 'react';
import './App.css';
import ChooseService from './ChooseService.js';
import LoadingIndicatorComponent from './loading-indicator-component.js';

function App() {
  return (
    <div className="App">
    <LoadingIndicatorComponent/>
      <header className="App-header" >
        Ar Salon & Day Spa
      </header>
      <body>

      <ChooseService/>
      </body>
    </div>

  );
}

export default App;
