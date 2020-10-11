import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Switch>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
