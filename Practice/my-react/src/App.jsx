import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import EmployeeTable from './Components/Employee Table/EmployeeTable'
import Props from './Components/Props&State/Props'
import User from './Components/User App/User'

class App extends React.Component {
  render() {
    return <>
      <Router>
        < Navbar />

        <Routes>
          <Route path='/EmployeeTable' element={<EmployeeTable />} />
          <Route path='/Props&State' element={<Props />} />
          <Route path='/UserApp' element={< User />} />
        </Routes>

      </Router>
    </>
  }
}

export default App