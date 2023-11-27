import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import TextAnalyzer from './Text Analyzer/TextAnalyzer'
import Alert from './Text Analyzer/Alert'

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
               < Alert alert={alert} />
               <Routes>
                    <Route path='/' element={< TextAnalyzer showAlert={showAlert} />} />                    
               </Routes>
          </Router>
     </>
}

export default App
