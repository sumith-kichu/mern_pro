import React,  { useState } from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home'


import './App.css'

function App() {

  return (

    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
         <Route path="/login" element={<Login/>}/>
          <Route path="/signin"element={<Signup/>}/>

        </Routes>
      </Router>
      
    </div>

  );



  
  
      

  
  
}

export default App
