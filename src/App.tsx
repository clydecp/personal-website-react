import React from 'react';
import './App.css';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
