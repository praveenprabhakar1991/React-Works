import React, { Component } from 'react'
import Developer from './Assets/Developer.png'
import IPort from './Assets/IPort.png'
import IPorttransport from './Assets/IPorttransport.png'
import Newsapp from './Assets/Newsapp.png'
import contact from './Assets/contact.png'
import Product from './Assets/Product.png'
import Textanalyzer from './Assets/Textanalyzer.png'

class Home extends Component {

   render() {
      return <>
         {/* Home Section Starts Here */}
         <section className='Home' id="home">
            <div className="container-lg">
               <div className="row min-vh-100 align-items-center align-content-center">
                  <div className="col-md-6 mt-5 mt-md-0">
                     <div className='home-text' >
                        <p className='text-muted mb-1'> Hello, I'm</p>
                        <h1 className='text-uppercase'>Prabhakar B</h1>
                        <h2 className='text-primary text-uppercase'>Full Stack Developer</h2>
                        <p className='text-muted mt-3 text-capitalize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam neque molestias sunt odit.</p>
                        <a className="btn btn-outline-primary mt-3 px-3" href="#Portfolio">My Works</a>
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
                  <div className="col-md-6">
                     <div className='about-text'>
                        <h3 className='text-uppercase mb-3'>fugiat magni deleniti iure omnis dicta facere temporibus</h3>
                        <p className='text-capitalize text-muted'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eaque accusamus deserunt debitis vero maxime, harum, cupiditate explicabo perferendis aliquam sapiente, repellat reiciendis dolor! Iste omnis ipsum architecto blanditiis, quia reiciendis ratione corrupti laboriosam minus quis maiores corporis, sint cumque pariatur. Repellendus fuga pariatur cum fugiat earum magni consequatur necessitatibus voluptates dolor! Accusantium beatae perspiciatis, molestias quae animi perferendis ab, nostrum et asperiores architecto, vero iure! Animi quos perferendis adipisci ab nostrum ipsum atque.</p>

                        <div className='social-inks mt-5'>
                           <i className='mx-5 fa fa-facebook fa-2xl'></i> 
                           <i className='mx-5 fa fa-instagram fa-2xl'></i> 
                           <i className='mx-5 fa fa-whatsapp fa-2xl'></i> 
                           <i className='mx-5 fa fa-github fa-2xl mt-5'></i>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 mt-5 mt-md-0">
                     <div className='skill-item'>
                        <h6 className='mt-2'> Adobe Photoshop</h6>
                        <div class="progress shadow-sm" style={{ height: "8px" }}>
                           <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6 className='mt-2'>Adobe Premier Pro</h6>
                        <div class="progress shadow-sm" style={{ height: "8px" }}>
                           <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6 className='mt-2'>Adobe After effects</h6>
                        <div class="progress shadow-sm" style={{ height: "8px" }}>
                           <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6 className='mt-2'>Html</h6>
                        <div class="progress shadow-sm" style={{ height: "8px" }}>
                           <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6 className='mt-2'>Bootstrap</h6>
                        <div class="progress shadow-sm" style={{ height: "8px" }}>
                           <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6 className='mt-2'>JavaScript</h6>
                        <div class="progress shadow-sm" style={{ height: "8px" }}>
                           <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6 className='mt-2'>React-Js</h6>
                        <div class="progress shadow-sm" style={{ height: "8px" }}>
                           <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h6 className='mt-2'>Python</h6>
                        <div class="progress shadow-sm" style={{ height: "8px" }}>
                           <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* About Section Ends Here */}

         {/* Services Section Starts Here */}
         <section className=" services min-vh-100 py-5" id='service'>
            <div className="container-lg py-4">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className='section-title text-center'>
                        <h2 className='mb-5'>What I Do</h2>
                     </div>
                  </div>
               </div>

               <div className="row text-center">

                  <div className="col-md-6 col-lg-4 mt-3">
                     <div className='service-item shadow-sm p-4 rounded bg-white'>
                        <div className='icon text-primary my-3'>
                           <i className=' fa fa-image fa-2xl'></i>
                        </div>
                        <h4 className='py-2'>Photoshop</h4>
                        <p className='text-muted text-capitalize'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nam saepe! Ad, doloremque excepturi blanditiis in fugit laudantium labore nulla ut. Aliquam laborum veniam tempora magni. Minima cumque commodi obcaecati.</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mt-3">
                     <div className='service-item shadow-sm p-4 rounded bg-white'>
                        <div className='icon text-primary my-3'>
                           <i className='fa fa-lightbulb fa-2xl'></i>
                        </div>
                        <h4 className='py-2'>Creative Design</h4>
                        <p className='text-muted text-capitalize'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nam saepe! Ad, doloremque excepturi blanditiis in fugit laudantium labore nulla ut. Aliquam laborum veniam tempora magni. Minima cumque commodi obcaecati.</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mt-3">
                     <div className='service-item shadow-sm p-4 rounded bg-white'>
                        <div className='icon text-primary my-3'>
                           <i className='fa fa-code fa-2xl'></i>
                        </div>
                        <h4 className='py-2'>Web Development</h4>
                        <p className='text-muted text-capitalize'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nam saepe! Ad, doloremque excepturi blanditiis in fugit laudantium labore nulla ut. Aliquam laborum veniam tempora magni. Minima cumque commodi obcaecati.</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mt-5">
                     <div className='service-item shadow-sm p-4 rounded bg-white'>
                        <div className='icon text-primary my-3'>
                           <i class="fa-brands fa-square-js fa-2xl"></i>
                        </div>
                        <h4 className='py-2'>JavaScript</h4>
                        <p className='text-muted text-capitalize'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nam saepe! Ad, doloremque excepturi blanditiis in fugit laudantium labore nulla ut. Aliquam laborum veniam tempora magni. Minima cumque commodi obcaecati.</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mt-5">
                     <div className='service-item shadow-sm p-4 rounded bg-white'>
                        <div className='icon text-primary my-3'>
                           <i class="fa-brands fa-react fa-2xl"></i>
                        </div>
                        <h4 className='py-2'>React</h4>
                        <p className='text-muted text-capitalize'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nam saepe! Ad, doloremque excepturi blanditiis in fugit laudantium labore nulla ut. Aliquam laborum veniam tempora magni. Minima cumque commodi obcaecati.</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mt-5">
                     <div className='service-item shadow-sm p-4 rounded bg-white'>
                        <div className='icon text-primary my-3'>
                           <i class="fa-brands fa-python fa-2xl"></i>
                        </div>
                        <h4 className='py-2'>Python</h4>
                        <p className='text-muted text-capitalize'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nam saepe! Ad, doloremque excepturi blanditiis in fugit laudantium labore nulla ut. Aliquam laborum veniam tempora magni. Minima cumque commodi obcaecati.</p>
                     </div>
                  </div>

               </div>
            </div>
         </section>
         {/* Services Section Ends Here */}

         {/* Portfolio Section Starts Here */}
         <section className='portfolio min-vh-100 py-5' id='portfolio'>
            <div className="container-lg py-4">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className='section-title text-center'>
                        <h2 className='mb-5'>Projects with Bootstrap</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={IPort} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Iport item" />
                        <h3 className='my-3 text-center'>Iport App</h3>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={IPorttransport} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Iport item" />
                        <h3 className='my-3 text-center'>IPort Transport App</h3>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={Textanalyzer} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Iport item" />
                        <h3 className='my-3 text-center'>IText Analyzer App</h3>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={Newsapp} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Iport item" />
                        <h3 className='my-3 text-center'>News App</h3>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={Product} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Iport item" />
                        <h3 className='my-3 text-center'>Product App</h3>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={contact} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Iport item" />
                        <h3 className='my-3 text-center'>Contact App</h3>
                     </div>
                  </div>

               </div>
            </div>
         </section>
         {/* Portfolio Section Ends Here */}

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
               <div className="row">
                  <div className="col-md-5">
                     <div className='contact-item d-flex mb-3'>
                        <div className='icon'>
                           <i className='text-primary fa fa-envelope fa-lg '></i>
                        </div>
                        <div className='text mx-4'>
                           <h5 className='fs-5'>Email</h5>
                           <p className='text-muted'>pprabhakar108@gmail.com</p>
                        </div>
                     </div>
                     <div className='contact-item d-flex mb-3'>
                        <div className='icon'>
                           <i className='text-primary fa fa-phone fa-lg '></i>
                        </div>
                        <div className='text mx-4'>
                           <h5 className='fs-5'>Phone</h5>
                           <p className='text-muted'>+ 91-9538496321</p>
                        </div>
                     </div>
                     <div className='contact-item d-flex mb-3'>
                        <div className='icon'>
                           <i className='text-primary fa fa-github fa-lg'></i>
                        </div>
                        <div className='text mx-4'>
                           <h5 className='fs-5'>Git Hub</h5>
                           <p className='text-muted'> https://github.com/praveenprabhakar1991</p>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-7">
                     <div className="contact.form">
                        <form>
                           {/* 1st Row of Form Starts Here */}
                           <div className="row">
                              <div className="col-md-6 mb-4">
                                 <input className='form-control shadow-sm' type="text" placeholder='Name' />
                              </div>
                              <div className="col-md-6 mb-4">
                                 <input className='form-control shadow-sm' type="email" placeholder='Email Address' />
                              </div>
                           </div>
                           {/* 1st Row of Form Ends Here */}

                           {/* 2nd Row of Form Starts Here */}
                           <div className="row">
                              <div className="col-lg-12 mb-4">
                                 <input className='form-control shadow-sm' type="text" placeholder='Subject' />
                              </div>
                           </div>
                           {/* 2nd Row of Form Ends Here */}

                           {/* 3rd Row of Form Starts Here */}
                           <div className="row">
                              <div className="col-lg-12 mb-4">
                                 <textarea rows={6} className='form-control shadow-sm' type="text" placeholder='Your Message' />
                              </div>
                           </div>
                           {/* 3rd Row of Form Ends Here */}

                           <button className='btn btn-outline-primary '>Send Message</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Contact Section Ends Here */}

         {/* Footer Starts Here */}
         <footer className='footer border-top py-4 shadow-sm'>
            <div className="container-lg">
               <div className="row">
                  <div className="col-lg-12">
                     <p className='text-muted text-center'> &copy; 2023  Created by Prabhakar</p>
                  </div>
               </div>
            </div>
         </footer>
         {/* Footer  Ends Here */}


      </>
   }
}

export default Home
