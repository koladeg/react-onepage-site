import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Pages/HomePage/Home';
import Services from './components/Pages/Services/Services';
import Products from './components/Pages/Products/Products';
import SignUp from './components/Pages/SignUp/SignUp';
import Footer from './components/Pages/Footer/Footer';


function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => <Home/>} />
        <Route exact path='/services' render={() => <Services/>} />
        <Route exact path='/products' render={() => <Products/>} />
        <Route exact path='/sign-up' render={() => <SignUp />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
