import React, { Component } from 'react'

class Navbar extends Component {

     render() {
          return <>
               <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light shadow-sm">
                    <a className="navbar-brand text-primary fw-bold fs-4" href="/">User App</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>                  
               </nav>
          </>
     }
}

export default Navbar