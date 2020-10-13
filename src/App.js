import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Pages/HomePage/Home';


function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
