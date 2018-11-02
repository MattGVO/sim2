import React, { Component } from 'react';
import './App.css';
import Header from './component/Header'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <div>
        {Routes}
        </div>
      </div>
    );
  }
}

export default App;
