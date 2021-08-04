import React from 'react';
import './App.css';
import Admin from './pages/Admin';
import Navbar from './pages/Navbar';
import AddEmployer from './pages/AddEmployer';
import AddJob from './pages/AddJob';
import Login from './pages/Login';
import Home from './pages/EmployeeHome';
import NavbarEmployee from './pages/NavbarEmployee';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/">
            <Navbar />
            <Admin />
          </Route>

          <Route path='/add-employer'>
            <div >
              <Navbar />
              <AddEmployer />
            </div>
          </Route>

          <Route path='/login'>
            <div >
              <Login />
            </div>
          </Route>

          <Route path='/home'>
            <div >
              <NavbarEmployee />
              <Home />
            </div>
          </Route>

          <Route path='/add-job'>
            <div >
              <NavbarEmployee />
              <AddJob />
            </div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
