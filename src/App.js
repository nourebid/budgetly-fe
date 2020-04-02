import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome';
import Register from './components/register';
import Login from './components/login';
import Budget from './components/budget';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'welcome',
    }
  }

onLogoClick = () => {
  this.setState({route: 'login'})
}

onRegisterClick = () => {
  this.setState({route: 'register'})
 }

 onRegisterSubmit = () => {
  this.setState({route: 'budget'})
 }

 onSignIn = () => {
   this.setState({route: 'budget'})
 }

 onSignOut = () => {
   this.setState({route: 'welcome'})
 }

  render () {
    return (
      <div>
        <div className="App">
          {this.state.route === 'welcome' ? <Welcome onLogoClick={this.onLogoClick}/>:null}
          {this.state.route === 'login' ? <Login onRegisterClick={this.onRegisterClick} onSignIn={this.onSignIn}/>:null}
          {this.state.route === 'register' ? <Register onRegisterSubmit={this.onRegisterSubmit}/>:null}
          {this.state.route === 'budget' ? <Budget onSignOut={this.onSignOut}/>:null}
        </div>

      </div>
      
          
    );
  }
  
}

export default App;
