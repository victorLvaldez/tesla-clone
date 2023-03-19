import React from 'react';
import logo from './logo.svg';
import './App.css';

/* Components*/
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
