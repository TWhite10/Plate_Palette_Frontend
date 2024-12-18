import{Routes,Route} from "react-router-dom"

import { useState } from 'react'
import './App.css'
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


function App() {
  
  return (
    <div className='App'>
    <Header/>
    <Nav/>
    <Footer/>

  </div>
  )
}

export default App
