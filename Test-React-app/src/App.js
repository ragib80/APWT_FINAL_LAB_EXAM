import React from 'react';
import './App.css';
import Admin from './pages/Admin';
import Navbar from './pages/Navbar';
import AddEmployer from './pages/AddEmployer';
import EditEmployeer from './pages/EditEmployeer';
import EditJobs from './pages/EditJobs';
import AddJob from './pages/AddJob';
import Login from './pages/Login';
import Home from './pages/EmployeeHome';
import SearchEmp from './pages/Search';
import NavbarEmployee from './pages/NavbarEmployee';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/admin">
            <Navbar />
            <Admin />
          </Route>

          <Route path='/add-employer'>
            <div >
              <Navbar />
              <AddEmployer />
            </div>
          </Route>

          <Route path='/edit-employer/update/:id'>
            <div >
              <Navbar />
              <EditEmployeer />
            </div>
          </Route>

          <Route exact path='/'>
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
          <Route path='/edit-job/update/:id'>
            <div >
              <NavbarEmployee />
              <EditJobs />
            </div>
          </Route>
          <Route exact path='/employee/search'>
            <Navbar />
            <SearchEmp />
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
