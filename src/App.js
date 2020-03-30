import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import SignOut from './components/SignOut';
import Register from './components/register';
import Login from './components/login';


class App extends Component {
  state = {
    route: 'login'
  }
  render () {
    return (
      <div className="App">
        <Landing />
        { this.state.route === 'login' 
            ?<Login />
            :<div>
            <Register />
            <SignOut />
            </div>
          
        }
      </div>
    );
  }
  
}

export default App;
