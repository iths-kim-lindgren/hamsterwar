import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';
import Header from './components/Header'
import Hamster from './components/Hamster'
import Footer from './components/Footer'
import Bordered from './components/Bordered'
import MainSection from './components/MainSection'

function App() {

  return (

    <div className="wrapper">
      <Header></Header>
      <nav></nav>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  )
}

export default App;