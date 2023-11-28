import React, { Component } from 'react'

class Contact extends Component {
   render() {
      return <>
         {/* Contact Section Starts Here */}
         <section className='contact min-vh-100 py-5' id="contact">
            <div className="container-lg py-4">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className='section-title text-center'>
                        <h2 className='mb-5'>Contact Me</h2>
                     </div>
                  </div>
               </div>
               <div className="row justify-content-center">
                  <div className="col-md-7 mt-5">
                     <div className="contact-form">
                        <form>
                           {/* 1st Row of Form Starts Here */}
                           <div className="row">
                              <div className="col-md-6 mb-4">
                                 <h5 className='text-muted'>Name</h5>
                                 <input className='form-control shadow-sm' name='name' required type="text" placeholder='Your Name' />
                              </div>
                              <div className="col-md-6 mb-4">
                                 <h5 className='text-muted'>Email</h5>
                                 <input className='form-control shadow-sm' name='email' required type="email" placeholder='Your Email Address' />
                              </div>
                           </div>
                           {/* 1st Row of Form Ends Here */}

                           {/* 2nd Row of Form Starts Here */}
                           <div className="row">
                              <div className="col-lg-12 mb-4">
                                 <h5 className='text-muted'>Message</h5>
                                 <textarea rows={6} className='form-control shadow-sm' type="text" placeholder='Your Message' />
                              </div>
                           </div>
                           {/* 2nd Row of Form Ends Here */}

                           <button className='btn btn-outline-primary shadow-sm'>Send Message</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>

            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-md-7 mt-5">
                     <div className='contact-item d-flex mb-3'>
                        <div className='icon'>
                           <a href="https://www.linkedin.com/in/praveen-prabhakar-147631212/" target='_blank' rel="noreferrer" >
                              <i className='text-dark fa fa-linkedin fa-2xl ml-4'></i></a>
                           <a href="https://github.com/praveenprabhakar1991" target='_blank' rel="noreferrer">
                              <i className='text-dark fa fa-github fa-2xl ml-5'></i></a>
                           <a href="https://www.instagram.com/praveen_prabhakar_/" target='_blank' rel="noreferrer">
                              <i className='text-dark fa fa-instagram fa-2xl ml-5'></i></a>
                           <a href="https://www.youtube.com/@mindhazzel-relaxationmusic832" target='_blank' rel="noreferrer">
                              <i className='text-dark fa fa-youtube fa-2xl ml-5'></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Contact Section Ends Here */}

      </>
   }
}

export default Contact
