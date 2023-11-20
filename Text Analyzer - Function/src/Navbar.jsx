import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Assets/Logo.png'

// Fat Arrow Function Method Syntax
const Navbar = () => {     

     return <>
          <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
               <Link to="#" className="navbar-brand" >   <img src={Logo}  width={50} height={50} />  iText Analyzer </Link>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>

               <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                         <li className="nav-item"><Link to="/Home" className="nav-link">Home</Link></li>
                         <li className="nav-item"><Link to="/About" className="nav-link">About Us</Link></li>
                         {/* <li className="nav-item"><Link to="/Contact" className="nav-link">Contact Us</Link></li>
                         <li className="nav-item"><Link to="/Product" className="nav-link">Product</Link></li> */}
                    </ul>
               </div>               
          </nav>          
     </>     
}

export default Navbar