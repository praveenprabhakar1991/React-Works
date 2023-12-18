import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import EmployeeTable from './Components/EmployeeTable'

class App extends React.Component {
  render() {
    return <>
      <Router>
        < Navbar />
        < EmployeeTable />
        <Routes>
          <Route path='#' element={Navbar} />
        </Routes>
      </Router>
    </>
  }
}

export default App