import React, { Component } from 'react'
import IPort from './Assets/Portfolio/IPort.png'
import IPorttransport from './Assets/Portfolio/IPorttransport.png'
import Newsapp from './Assets/Portfolio/Newsapp.png'
import contact from './Assets/Portfolio/contact.png'
import Product from './Assets/Portfolio/Product.png'
import Textanalyzer from './Assets/Portfolio/Textanalyzer.png'
import Calculator from './Assets/Portfolio/Calculator.png'
import MusicApp from './Assets/Portfolio/MusicApp.png'

class Portfolio extends Component {
   render() {
      return <>
         {/* Portfolio Section Starts Here */}
         <section className='portfolio min-vh-100 py-5' id='portfolio'>
            <div className="container-lg py-4">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className='section-title text-center'>
                        <h2 className='mb-5'>Projects</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={IPort} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Iport item" />
                        <h4 className='my-3 text-center'>IPort App</h4>
                        <div className='d-flex justify-content-between'>
                           <a className="text-dark" href="https://iport.onrender.com/" target='-blank'><i className="mx-5 fa-solid fa-desktop fa-xl"></i></a>
                           <a className="text-dark" href="https://github.com/praveenprabhakar1991/IPORT-Website" target='-blank'><i className='mx-5 fa fa-github fa-2xl'></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={IPorttransport} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Iport Transport item" />
                        <h4 className='my-3 text-center'>IPort Transport App</h4>
                        <div className='d-flex justify-content-between'>
                           <a className="text-dark" href="https://iporttransport.onrender.com/" target='-blank'><i className="mx-5 fa-solid fa-desktop fa-xl"></i></a>
                           <a className="text-dark" href="https://github.com/praveenprabhakar1991/IPort-Transport-Website" target='-blank'>
                              <i className='mx-5 fa fa-github fa-2xl'></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={Textanalyzer} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Textanalyzer item" />
                        <h4 className='my-3 text-center'>IText Analyzer App</h4>
                        <div className='d-flex justify-content-between'>
                           <a className="text-dark" href="https://itextanalyzer.onrender.com/" target='-blank'><i className="mx-5 fa-solid fa-desktop fa-xl"></i></a>
                           <a className="text-dark" href="https://github.com/praveenprabhakar1991/React-Works/tree/main/Text%20Analyzer%20App/src" target='-blank'>
                              <i className='mx-5 fa fa-github fa-2xl'></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={Product} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Product item" />
                        <h3 className='my-3 text-center'>Product App</h3>
                        <div className='d-flex justify-content-between'>
                           <a className="text-dark" href="https://iportproductapp.onrender.com/" target='-blank'><i className="mx-5 fa-solid fa-desktop fa-xl"></i></a>
                           <a className="text-dark" href="https://github.com/praveenprabhakar1991/React-Works/tree/main/Product%20App/src" target='-blank'>
                              <i className='mx-5 fa fa-github fa-2xl'></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={contact} className='w-100 img-thumbnail img-fluid shadow-sm' alt="User item" />
                        <h4 className='my-3 text-center'>User App</h4>
                        <div className='d-flex justify-content-between'>
                           <a className="text-dark" href="https://iportuserapp.onrender.com/" target='-blank'><i className="mx-5 fa-solid fa-desktop fa-xl"></i></a>
                           <a className="text-dark" href="https://github.com/praveenprabhakar1991/React-Works/tree/main/User%20App" target='-blank'>
                              <i className='mx-5 fa fa-github fa-2xl'></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={Calculator} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Calculator item" />
                        <h4 className='my-3 text-center'>Calculator App</h4>
                        <div className='d-flex justify-content-between'>
                           <a className="text-dark" href="https://iportcalculator.onrender.com/" target='-blank'><i className="mx-5 fa-solid fa-desktop fa-xl"></i></a>
                           <a className="text-dark" href="https://github.com/praveenprabhakar1991/Calculator-App" target='-blank'>
                              <i className='mx-5 fa fa-github fa-2xl'></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className='portfolio-item my-5'>
                        <img src={MusicApp} className='w-100 img-thumbnail img-fluid shadow-sm' alt="Music item" />
                        <h4 className='my-3 text-center'>Music App</h4>
                        <div className='d-flex justify-content-between'>
                           <a className="text-dark" href="https://iportmusic.onrender.com/" target='-blank'><i className="mx-5 fa-solid fa-desktop fa-xl"></i></a>
                           <a className="text-dark" href="https://github.com/praveenprabhakar1991/Music-App" target='-blank'>
                              <i className='mx-5 fa fa-github fa-2xl'></i></a>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4 ">
                     <div className='portfolio-item my-5'>
                        <img src={Newsapp} className='w-100 img-thumbnail img-fluid shadow-sm ' alt="News item" />
                        <h4 className='my-3 text-center'>News App</h4>
                        <div className='d-flex justify-content-end'>
                           <a className="text-dark" href="https://github.com/praveenprabhakar1991/News-App" target='-blank'><i className='mx-5 fa fa-github fa-2xl'></i></a>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>
         {/* Portfolio Section Ends Here */}

      </>
   }
}

export default Portfolio
