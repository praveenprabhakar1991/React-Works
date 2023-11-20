import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import TextAnalyzer from './TextAnalyzer'
import About from './About'

class App extends React.Component {

   render() {
      return <>
         <Router>
            <Navbar />            
            <Routes>
               <Route path = "/" element = {<TextAnalyzer />} />
               <Route path = "/home" element = {<TextAnalyzer />} />
               <Route path = "/about" element = {<About />} />
            </Routes>
         </Router>
      </>
   }
}

export default App