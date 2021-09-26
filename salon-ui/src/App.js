import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {Route, Switch} from "react-router";
import './App.css';
import ChooseService from './ChooseService.js';
import LoadingIndicatorComponent from './loading-indicator-component.js';
import AppNotificationComponent from './AppNotificationComponent';
import ChooseSlot from './ChooseSlot.js';
function App() {
  return (
    <Router>
    <div className="App">
    <LoadingIndicatorComponent/>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="/">Ar Salon & Day Spa</a>
      </nav>
      <main role="main" className="container">

        <div className="padding-container">
            <Switch>
                <Route exact path="/"  component= {ChooseService}></Route>
                <Route path="/chooseslot/:serviceId/:serviceName" component={ChooseSlot}></Route>
                <Route>
                  <ChooseService />
                </Route>
            </Switch>
        </div>

      </main>
        <AppNotificationComponent/>
    </div>
    </Router>

  );
}

export default App;
