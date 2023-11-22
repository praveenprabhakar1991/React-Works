import React, { Component } from 'react'

class Navbar extends Component {

     render() {
          return <>
               <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm">
                    <a className="navbar-brand text-primary fw-bold fs-4" href="/">IPortfolio</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav ml-auto">
                              <li className="nav-item"> <a className="nav-link active text-primary"  href="#home">Home</a> </li>   
                              <li className="nav-item"> <a className="nav-link text-primary" href="#about">About</a> </li>   
                              <li className="nav-item"> <a className="nav-link text-primary" href="#service">Services</a> </li>   
                              <li className="nav-item"> <a className="nav-link text-primary" href="#portfolio">Portfolio</a> </li>   
                              <li className="nav-item"> <a className="nav-link text-primary" href="#contact">Contact</a> </li>                              
                         </ul>
                    </div>
               </nav>
          </>
     }
}

export default Navbar