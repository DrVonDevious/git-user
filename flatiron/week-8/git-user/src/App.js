import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar.js'
import Profile from './components/Profile.js'

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(user) => {console.log(user)}}/>
      <Profile />
    </div>
  );
}

export default App;
