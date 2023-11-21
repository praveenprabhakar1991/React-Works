import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Product from './Components/Product App/Product'
import UserApp from './Components/User App/UserApp'
import TextAnalyzer from './Components/Text Analyzer/TextAnalyzer'
import Alert from './Components/Text Analyzer/Alert'
import Digital_Clock from './Components/Digital Clock/Digital_Clock'
import Home from './Components/Home'

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
                    <Route path='/' element={< Home />} />                   
                    <Route path='/digitalclock' element={< Digital_Clock />} />
                    <Route path='/product' element={< Product />} />
                    <Route path='/user' element={< UserApp />} />
                    <Route path='/textanalyzer' element={< TextAnalyzer showAlert={showAlert} />} />
               </Routes>
          </Router>
     </>
}

export default App
