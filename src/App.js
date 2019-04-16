import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ConversationsList from './components/ConversationsList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ConversationsList />
        </header>
      </div>
    );
  }
}

export default App;
