import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
   render() {
      return <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="#"> iText Analyzer </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav mr-auto">
                  <li className="nav-item active"><Link className="nav-link" to="/home">Home</Link></li>
                  <li className="nav-item active"><Link className="nav-link" to="/about">About</Link></li>

               </ul>
               <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
               </form>
            </div>
         </nav>
      </>
   }
}

export default Navbar
