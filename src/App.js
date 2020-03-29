import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import Navbar from './components/Navbar';
import Register from './components/register';
import Login from './components/login';


class App extends Component {
  initialState = {
    route: 'landing',
  }
  
  render () {
    return (
      <div className="App">
        <Landing />
        <Navbar />
        <Register />
        <Login />
      </div>
    );
  }
  
}

export default App;
