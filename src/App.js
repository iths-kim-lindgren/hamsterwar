import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Header from './components/Header'
import Hamster from './components/Hamster'
import Footer from './components/Footer'
import Bordered from './components/Bordered'
import StartSection from './components/StartSection'
import NavBar from './components/NavBar'
import BattleStats from './components/BattleStats'

function App() {

  return (

    <div className="wrapper">
      <Header></Header>
      <NavBar></NavBar>
      
      <Footer></Footer>
    </div>
  )
}

export default App;