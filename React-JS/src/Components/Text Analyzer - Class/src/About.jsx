import React, { Component } from 'react'
import Analyze from './Assets/Analayze.jpg'
import Word from './Assets/Word-Frequency.jpg'
import Compatible from './Assets/Compatible.jpg'

class About extends Component {
   render() {
      return <>
         {/* Featurette */}
         <div className="container mt-5">
            <div className="row featurette d-flex justify-content-center align-items-center">
               <div className="col-md-7">
                  <h1 className="featurette-heading fw-normal lh-1">Analyze Your Text. <span
                     className="text-body-secondary">It’ll blow your mind.</span></h1>
                  <p className="lead">iTextAnalyzer Provides You To Analyze Your Text Quickly And Efficiently. This Analyzer Tool Is An Online Text Analysis Tool That Generates Statistics About Your Text Live With Word Count, Character Count and Shows You The Approx Minutes To Read The Words. This Analyzer Tool Provides You The Instant Results For Analyzing The Word Count, Character Count, Extra Space Remover, Extra Line Remover, Capitalize The Words.
                  </p>
               </div>
               <div className="col-md-5">
                  <img className="img-fluid" src= {Analyze} alt="" />
               </div>
            </div>
            <hr />

            <div className="row featurette featurette d-flex justify-content-center align-items-center">
               <div className="col-md-7 order-md-2">
                  <h1 className="featurette-heading fw-normal lh-1">Word Frequencies. <span
                     className="text-body-secondary">See for yourself.</span></h1>
                  <p className="lead">iTextAnalyzer Computes The Word Frequencies In A Basic Building Block Of Higher Level Textual Analysis Algorithms. This Can Include Raw Word Counts, Or Calculating The Percentage Of Words In A Text Or Set Of Texts And Comparing That Across Texts And Time.</p>
               </div>
               <div className="col-md-5 order-md-1">
                  <img className="img-fluid" src= {Word} alt="" />
               </div>
            </div>
            <hr />

            <div className="row featurette featurette d-flex justify-content-center align-items-center">
               <div className="col-md-7">
                  <h1 className="featurette-heading fw-normal lh-1">Browser Compatible. <span
                     className="text-body-secondary">Checkmate.</span></h1>
                  <p className="lead">iTextAnalyzer Word Counter Application Works In Any Web Browsers Such As Chrome, Firefox, Internet Explorer, Safari, Opera And Mobile Phones. It Suits To Count Characters In Facebook, Blog, Books, Excel Document, Pdf Document, Essays, Etc.</p>
               </div>
               <div className="col-md-5">
                  <img className="img-fluid" src={Compatible} alt="" />
               </div>
            </div>
            <hr />
         </div>
      </>
   }
}

export default About
