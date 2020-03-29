import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import Register from './components/register';
import Login from './components/login';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Landing />
        <Register />
        <Login />
      </div>
    );
  }
  
}

export default App;
