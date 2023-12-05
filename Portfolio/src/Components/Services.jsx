import React, { Component } from 'react'

import Illustrator from './Assets/Skills/Illustrator.png'
import Photoshop from './Assets/Skills/Photoshop.png'
import Premierpro from './Assets/Skills/Premierpro.png'
import Aftereffects from './Assets/Skills/Aftereffects.png'
import Html from './Assets/Skills/HTML.png'
import Css from './Assets/Skills/CSS.png'
import Bootstrap from './Assets/Skills/Bootstrap.png'
import Javascript from './Assets/Skills/Javascript.png'
import react from './Assets/Skills/React.png'
import Redux from './Assets/Skills/Redux.png'
import Python from './Assets/Skills/Python.png'
import Django from './Assets/Skills/Django.png'
import Mongodb from './Assets/Skills/MongoDb.png'
import Mysql from './Assets/Skills/Mysql.png'
import Git from './Assets/Skills/Git.png'
import Github from './Assets/Skills/Github.png'

class Services extends Component {

   skills = [
      { Name: "Adobe Illustrator", Logo: Illustrator },
      { Name: "Adobe Photoshop", Logo: Photoshop },
      { Name: "Adobe Premierpro", Logo: Premierpro },
      { Name: "Adobe Aftereffects", Logo: Aftereffects },
      { Name: "Html", Logo: Html },
      { Name: "Css", Logo: Css },
      { Name: "Bootstrap", Logo: Bootstrap },
      { Name: "Javascript", Logo: Javascript },
      { Name: "react", Logo: react },
      { Name: "Redux", Logo: Redux },
      { Name: "Python", Logo: Python },
      { Name: "Django", Logo: Django },
      { Name: "Mongodb", Logo: Mongodb },
      { Name: "Mysql", Logo: Mysql },
      { Name: "Git", Logo: Git },
      { Name: "Github", Logo: Github },
   ]

   render() {
      return <>
         {/* Services Section Starts Here */}
         <section className=" services min-vh-100 py-5" id='service'>
            <div className="container-md py-4">
               <div className="row justify-content-center">
                  <div className="col-lg-8">
                     <div className='section-title text-center'>
                        <h2 className='mb-5'>My Skills</h2>
                     </div>
                  </div>
               </div>
               <div className='my skills'>
                  <div className="container">
                     <div className="row text-center" >
                        {
                           this.skills.map((skill) => {
                              return <div className="col-md-2" key={skill.Name}>
                                 <span className="badge badge-pill shadow-sm mt-2 mb-2"><img src={skill.Logo} className="img-fluid"></img></span>
                                 <h4 className='text-muted'>{skill.Name}</h4>
                              </div>
                           })
                        }
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Services Section Ends Here */}
      </>
   }
}

export default Services