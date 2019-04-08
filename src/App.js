import React, { Component } from 'react';
import PiggyBank from './PiggyBank.js';
import './App.css';

class App extends Component {
  render() {
    return (

      <PiggyBank title="Savings Pig" deposit={10} debit={10}/>

    );
  }
}

export default App;
