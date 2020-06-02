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

onRouteChange = (route) => {
  this.setState({route: route})
}

  render () {
    return (
      <div>
        <div className="App">
          {this.state.route === 'welcome' ? <Welcome onRouteChange={this.onRouteChange}/>:null}
          {this.state.route === 'login' ? <Login onRouteChange={this.onRouteChange}/>:null}
          {this.state.route === 'register' ? <Register onRouteChange={this.onRouteChange}/>:null}
          {this.state.route === 'budget' ? <Budget onRouteChange={this.onRouteChange}/>:null}
        </div>

      </div>
      
          
    );
  }
  
}

export default App;
