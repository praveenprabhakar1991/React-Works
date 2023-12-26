import React, { Component } from 'react'
import IPort from './Assets/Portfolio/IPort.png'
import IPorttransport from './Assets/Portfolio/IPorttransport.png'
import Newsapp from './Assets/Portfolio/Newsapp.png'
import User from './Assets/Portfolio/User.png'
import Product from './Assets/Portfolio/Product.png'
import Textanalyzer from './Assets/Portfolio/Textanalyzer.png'
import Calculator from './Assets/Portfolio/Calculator.png'
import MusicApp from './Assets/Portfolio/MusicApp.png'

class Portfolio2 extends Component {

   Projects = [
      {
         Name: "IPort Website",
         Image: IPort,
         Tags: ["HTML", "Bootstrap", "React"],
         Live: "https://iport.onrender.com/",
         Github: "https://github.com/praveenprabhakar1991/IPORT-Website"
      },
      {
         Name: "IPorttransport Website",
         Image: IPorttransport,
         Tags: ["HTML", "Bootstrap", "React"],
         Live: "https://iporttransport.onrender.com/",
         Github: "https://github.com/praveenprabhakar1991/IPort-Transport-Website"
      },
      {
         Name: "IText Analyzer App",
         Image: Textanalyzer,
         Tags: ["Bootstrap", "JavaScript", "React"],
         Live: "https://itextanalyzer.onrender.com/",
         Github: "https://github.com/praveenprabhakar1991/React-Works/tree/main/Text%20Analyzer%20App/src"
      },
      {
         Name: "Product App",
         Image: Product,
         Tags: ["HTML", "Bootstrap", "JavaScript", "Axios", "React"],
         Live: "https://iportproductapp.onrender.com/",
         Github: "https://github.com/praveenprabhakar1991/React-Works/tree/main/Product%20App/src"
      },
      {
         Name: "News App",
         Image: Newsapp,
         Tags: ["HTML", "Bootstrap", "JavaScript", "React"],
         Live: " ",
         Github: "https://github.com/praveenprabhakar1991/News-App"
      },
      {
         Name: "User App",
         Image: User,
         Tags: ["HTML", "Bootstrap", "JavaScript", "Axios", "React"],
         Live: "https://iportuserapp.onrender.com/",
         Github: "https://github.com/praveenprabhakar1991/React-Works/tree/main/User%20App"
      },
      {
         Name: "Calculator App",
         Image: Calculator,
         Tags: ["HTML", "Css", "JavaScript"],
         Live: "https://iportcalculator.onrender.com/",
         Github: "https://github.com/praveenprabhakar1991/Calculator-App"
      },
      {
         Name: "Music App",
         Image: MusicApp,
         Tags: ["HTML", "Css", "JavaScript"],
         Live: "https://iportmusic.onrender.com/",
         Github: "https://github.com/praveenprabhakar1991/Music-App"
      },
   ]

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
                  {
                     this.Projects.map((Project) => {
                        return <div className="col-md-4 text-center mt-5" key={Project.Name}>
                           <div className="card shadow-sm">
                              <img src={Project.Image} className="card-img-top img-fluid" alt={Project.Name} />
                              <div className="card-body">
                                 <h5 className="card-title text-muted">{Project.Name}</h5>
                              </div>
                              <h5><span className="badge bg-light rounded-pill text-primary shadow-sm">{Project.Tags[0]}</span>
                                 <span className="badge bg-light rounded-pill text-primary shadow-sm">{Project.Tags[1]}</span>
                                 <span className="badge bg-light rounded-pill text-primary shadow-sm">{Project.Tags[2]}</span>
                              </h5>
                              <h5><span className="badge bg-light rounded-pill text-primary shadow-sm">{Project.Tags[3]}</span>
                                 <span className="badge bg-light rounded-pill text-primary shadow-sm">{Project.Tags[4]}</span>
                              </h5>
                              <div className="card-body">
                                 <a href={Project.Live} target='_blank' rel="noreferrer"><i className=" text-dark mx-5 fa-solid fa-desktop fa-xl"></i></a>
                                 <a href={Project.Github} target='_blank' rel="noreferrer"><i className=' text-dark mx-5 fa fa-github fa-2xl'></i></a>
                              </div>
                           </div>
                        </div>
                     })
                  }

               </div>
            </div>
         </section>
         {/* Portfolio Section Ends Here */}

      </>
   }
}

export default Portfolio2
