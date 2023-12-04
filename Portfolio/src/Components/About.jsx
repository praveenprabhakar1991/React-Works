import React, { Component } from 'react'
import Typed from 'react-typed'

class About extends Component {
   render() {
      return <>
         {/* About Section Starts Here */}
         <section className='about min-vh-100 py-5' id='about'>
            <div className="container-lg py-4">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className='section-title text-center'>
                        <h2 className=' mb-5'>About Me</h2>
                     </div>
                  </div>
               </div>

               <div className="row ">
                  <div className="col mt-5">
                     <div className='about-text'>
                        <h3 className=' Animated-Text text-capitalize text-center text-muted'>
                           <Typed
                              strings={[
                                 "Hi, I am Prabhakar. I was working as a Graphics Designer. I was Working as a Video Editor. Now i'm a Full-Stack Web Developer. I am specialized in developing responsive websites and web applications. Good at both front-end and back-end technologies like Adobe Photoshop, Premier Pro, After Effects, Html, Css, Bootstrap, Javascript, React, Redux, Python, Django, MySQL, Git and Git Hub . I am currently learning Django and MySQL."
                              ]}
                              typeSpeed={60}
                           />
                        </h3>                       
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* About Section Ends Here */}

      </>
   }
}

export default About
