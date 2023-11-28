import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
    
     return <>
          
               <Navbar /> 
               < Home />  
               < About /> 
               < Services />  
               < Portfolio />
               < Contact />    
               < Footer />  
               
     </>
}

export default App
