import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import About from './About'
import TextAnalyzer from './TextAnalyzer'
import Alert from './Alert'


const App = () => {

     const [alert, setAlert] = useState(null)
     const showAlert = (message) => {
          setAlert({ msg: message })

          setTimeout(() => {
               setAlert(null)
          }, 2000)
     }

     return <>
          <Router>
               <Navbar />
               <Alert alert={alert} />
               <Routes>
                    <Route path="/" element={<TextAnalyzer showAlert={showAlert} />} />
                    <Route path="/Home" element={<TextAnalyzer showAlert={showAlert} />} />
                    <Route path="/About" element={< About />} />
               </Routes>
          </Router>
     </>
}

export default App
