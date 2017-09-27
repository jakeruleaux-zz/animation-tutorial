import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Subscribe from './Components/Subscribe';
import ThankYou from './Components/ThankYou';
import PageShell from './Components/PageShell';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' exact component={PageShell(Subscribe)}></Route>
        <Route path='/thanks' exact component={PageShell(ThankYou)}></Route>
        </div>
      );
    }
  }

  export default App;
