import React, { Component } from 'react';
import './App.css';
import Feed from './Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4>Feed</h4>
        </header>
        <main className="App-contents">
          <Feed />
        </main>
      </div>
    );
  }
}

export default App;
