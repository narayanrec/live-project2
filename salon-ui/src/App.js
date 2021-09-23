import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import ChooseService from './ChooseService.js';
import LoadingIndicatorComponent from './loading-indicator-component.js';
import AppNotificationComponent from './AppNotificationComponent';
import ChooseSlot from './ChooseSlot.js';
function App() {
  return (

    <div>
    <Router>
        <Switch>
            <Route path="/">
                <ChooseService/>
            </Route>
            <Route path="/chooseslot/:serviceId/:serviceName">
                <ChooseSlot/>
            </Route>
        </Switch>
    </Router>
    <LoadingIndicatorComponent/>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">Ar Salon & Day Spa</a>
      </nav>
      <main role="main" className="container">
        <div className="padding-container">

        </div>
      </main>
        <AppNotificationComponent/>
    </div>

  );
}

export default App;
