import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import EmployeeTable from './Components/Employee Table/EmployeeTable'
import Props from './Components/Props&State/Props'
import User from './Components/User App/User'
import TextAnalyzer from './Components/Text Analyzer/TextAnalyzer'
import Alert from './Components/Text Analyzer/Alert'
import Calcy from './Components/Calcy'

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
      < Navbar />
      < Alert alert={alert} />
      <Routes>
        <Route path='/Calculator' element={<Calcy />} />
        <Route path='/EmployeeTable' element={<EmployeeTable />} />
        <Route path='/Props&State' element={<Props />} />
        <Route path='/UserApp' element={< User />} />
        <Route path='/TextAnalyzer' element={< TextAnalyzer showAlert={showAlert} />} />
      </Routes>

    </Router>
  </>

}

export default App