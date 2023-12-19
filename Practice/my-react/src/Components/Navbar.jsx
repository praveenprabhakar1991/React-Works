import React from 'react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {
   render() {
      return <>
         <nav className="navbar navbar-responsive navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
               <Link className="navbar-brand" to="#">React Projects</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link" to="/Props&State">Props&State</Link>
                     </li>                     
                     <li className="nav-item">
                        <Link className="nav-link" to="/EmployeeTable">EmployeeTable</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/UserApp">User App</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link">Disabled</Link>
                     </li>
                  </ul>                 
               </div>
            </div>
         </nav>
      </>
   }
}

export default Navbar