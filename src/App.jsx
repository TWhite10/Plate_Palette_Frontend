import{Routes,Route} from "react-router-dom"
import { useState } from 'react'
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Recipes from "./components/pages/AllRecipes.jsx"
import Categories from "./components/pages/Categories";
import Create from "./components/pages/CreateRecipe";
import MyKitchen from "./components/pages/MyKitchen";
import About from "./components/pages/About";
import './styles/App.css'
function App() {
  
  return (
    <div className='App'>
    <Header/>
    <Nav/>
    <main>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/create" element={<Create />} />
        <Route path="/mykitchen" element={<MyKitchen/>}/>
        <Route path="/about" element={<About/>}/>
     
      </Routes>

    </main>
    <Footer/>

  </div>
  )
}

export default App
