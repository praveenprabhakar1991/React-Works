import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'

import Home from './Components/Web Pages/Home'
import About from './Components/Web Pages/About'
import Contact from './Components/Web Pages/Contact'
// import Message from './Components/Message/Message'
// import CompA from './Components/Props/Props-Function/CompA'
// import CompA from './Components/Props/Props-Class/CompA'
// import Message from './Components/State/Message'
// import Product from './Components/State/Product_1'
// import Employee from './Components/Event Binding/Employee_copy'
// import Signup from './Components/Event Handling/Signup'
// import Employee from './Components/Employee Table/Employee'
import Product from './Components/Product App/Product'

const App = () => {

     return <>
          <Router>
               <Navbar />
               <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={< About />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Product" element={<Product />} />
               </Routes>
          </Router>
     </>
}

export default App
