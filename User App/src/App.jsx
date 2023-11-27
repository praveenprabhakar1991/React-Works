import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import User from './User App/UserApp'

const App = () => {   

     return <>
          <Router>
               <Navbar />              
               <Routes>
                    <Route path='/' element={< User />} />                    
               </Routes>
          </Router>
     </>
}

export default App
