import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import SignOut from './components/SignOut';
import Register from './components/register';
import Login from './components/login';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Landing />
        <SignOut />
        <Register />
        <Login />
      </div>
    );
  }
  
}

export default App;
