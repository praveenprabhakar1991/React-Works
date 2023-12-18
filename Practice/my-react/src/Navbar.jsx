import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
   render() {
      return <>
         <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className="container-fluid">
               <Link to="/" className='navbar-brand' >React</Link>
            </div>
            <div>
               <ul className='navbar-nav'>
                  <li className='nav-item'>
                     <Link to="Home" className='nav-link'>Home</Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="About" className='nav-link '>About</Link>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   }
}

export default Navbar