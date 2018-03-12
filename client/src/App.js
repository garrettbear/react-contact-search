import React, { Component } from 'react';
import './App.css';

import Contacts from './components/Contacts';
import SearchInput from './components/SearchInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <SearchInput />
        </div>
        <div className="App-content">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
