import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Timesheet from './components/Timesheet';

/* There are two main views for this app: the dashboard, and the timesheet
All individual timesheets will be displayed using the timesheet view, including:
+ current personal time sheet
+ historical personal time sheets
+ team (admin view) current time sheets for review
+ team (admin view) historical time sheets

The dashboard serves as the landing page and includes navigation to relevant timesheets, as well as access to additional information and components that do not have their own views*/

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timesheet">timesheet</Link>
          </li>
        </ul>
        </nav>
        <header>
          <p>needs app</p>
        </header>
        <Switch>
          <Route path="/timesheet">
            <Timesheet />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
