import React, { Component } from 'react'
import Developer from './Assets/Developer.png'

import Typed from 'react-typed'
// import Resume from './Assets/Resume.png'

class Home extends Component {

   render() {
      return <>
         {/* Home Section Starts Here */}
         <section className='Home' id="home">
            <div className="container-lg">
               <div className="row min-vh-100 align-items-center align-content-center">
                  <div className="col-md-6 mt-5 mt-md-0">
                     <div className='home-text' >
                        <h4 className='text-muted mb-1'>Hello, I'm</h4>
                        <h1 className='text-uppercase'>Prabhakar B</h1>
                        <div className='Animated-typing text-muted'>
                           <h2>
                              <Typed
                                 strings={[                                   
                                    "I Am React Js Web Developer.",                                                                        
                                    "I Am Django Web Developer.",                                                                        
                                    "I Am Full Stack Web Developer.",
                                 ]}
                                 typeSpeed={75}
                                 backSpeed={75}
                                 loop
                              />
                           </h2>
                        </div>

                        <a className="btn btn-outline-primary mt-3 px-3 shadow-sm" href="#portfolio">My Works</a>
                     </div>
                  </div>
                  <div className="col-md-6 mt-5 mt-md-0">
                     <div className='home-img' >
                        <img src={Developer} className='img-fluid' alt="Developer" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Home Section Ends Here */}
      </>
   }
}

export default Home
