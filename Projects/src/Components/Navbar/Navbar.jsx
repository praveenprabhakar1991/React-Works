import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

     render() {
          return <>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">React Apps</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav mr-auto">

                              <li class="nav-item dropdown">
                                   <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">Projects</a>
                                   <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/digitalclock"> Digital Clock</Link>
                                        <Link className="dropdown-item" to="product">Product App</Link>
                                        <Link className="dropdown-item" to="/user">User App</Link>
                                        <Link className="dropdown-item" to="/textanalyzer">Text Analyzer</Link>
                                   </div>
                              </li>

                         </ul>
                    </div>
               </nav>
          </>
     }
}

export default Navbar