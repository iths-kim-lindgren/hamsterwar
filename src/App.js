import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

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