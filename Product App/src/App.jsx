import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Product from './Product App/Product'

const App = () => {   

     return <>
          <Router>
               <Navbar />              
               <Routes>
                    <Route path='/' element={< Product />} />                    
               </Routes>
          </Router>
     </>
}

export default App
