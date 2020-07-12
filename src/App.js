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
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        budget: '',
        expenses: '',
        balance: '',
        joined: new Date(),
        lastAction: ''

      }
    }
  }

loadUser = (data) => {
  this.setState({user: {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    budget: data.budget,
    expenses: data.expenses,
    balance: data.balance,
    joined: new Date(),
    lastAction: ''
    }
  })
}

onRouteChange = (route) => {
  this.setState({route: route})
}

  render () {
    return (
      <div>
        <div className="App">
          {this.state.route === 'welcome' ? <Welcome onRouteChange={this.onRouteChange}/>:null}
          {this.state.route === 'login' ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:null}
          {this.state.route === 'register' ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>:null}
          {this.state.route === 'budget' ? <Budget onRouteChange={this.onRouteChange}/>:null}
        </div>

      </div>
      
          
    );
  }
  
}

export default App;
