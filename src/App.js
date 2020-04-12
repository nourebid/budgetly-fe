import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome';
import Register from './components/register';
import Login from './components/login';
import Budget from './components/budget';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'welcome',
    }
  }

onLogoClick = () => {
  this.setState({route: 'login'})
}

onRegisterWordClick = () => {
  this.setState({route: 'register'})
 }

 onRegisterButtonSubmit = () => {
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
          {this.state.route === 'login' ? <Login onRegisterWordClick={this.onRegisterWordClick} onSignIn={this.onSignIn}/>:null}
          {this.state.route === 'register' ? <Register onRegisterButtonSubmit={this.onRegisterButtonSubmit}/>:null}
          {this.state.route === 'budget' ? <Budget onSignOut={this.onSignOut}/>:null}
        </div>

      </div>
      
          
    );
  }
  
}

export default App;
