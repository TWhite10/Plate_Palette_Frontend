import{Routes,Route} from "react-router-dom"
import { Navigate } from "react-router-dom";
import { useState } from 'react'
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home.jsx"
import Recipes from "./components/pages/AllRecipes.jsx"
import Categories from "./components/pages/Categories";
import Create from "./components/pages/CreateRecipe";
import MyKitchen from "./components/pages/MyKitchen";
import About from "./components/pages/About";
import Login from "./components/userLog/Login.jsx";
import Register from "./components/userLog/Register.jsx";
import './styles/App.css'

export const isLoggedIn = () => {
  return localStorage.getItem("token") !== null;
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
export const getAuthToken = () => {
  return localStorage.getItem("token");
};



function App() {
  return (
    <div className='App'>
    <Header/>
    <Nav/>
    <main>
    <Routes>
    <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/profile" 
            element={isLoggedIn() ? <MyKitchen /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/create" 
            element={isLoggedIn() ? <Create /> : <Navigate to="/login" />} 
          />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
      </Routes>

    </main>
    <Footer/>

  </div>
  )
}

export default App
