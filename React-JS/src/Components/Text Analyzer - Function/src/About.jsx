import React from 'react'

const About = () => {
   return <>
      <div className="container">
         <h2>About Us</h2>
         <div class="accordion" id="accordionExample">
            <div class="accordion-item">
               <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong> Analyze Your Text </strong> 
                  </button>
               </h2>
               <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     <p>iTextAnalyzer Provides You To Analyze Your Text Quickly And Efficiently. This Analyzer Tool Is An Online Text Analysis Tool That Generates Statistics About Your Text Live With Word Count, Character Count and Shows You The Approx Minutes To Read The Words. This Analyzer Tool Provides You The Instant Results For Analyzing The Word Count, Character Count, Extra Space Remover, Extra Line Remover, Capitalize The Words.</p> 
                  </div>
               </div>
            </div>
            <div class="accordion-item">
               <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong> Word Frequencies </strong> 
                  </button>
               </h2>
               <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     <p>iTextAnalyzer Computes The Word Frequencies In A Basic Building Block Of Higher Level Textual Analysis Algorithms. This Can Include Raw Word Counts, Or Calculating The Percentage Of Words In A Text Or Set Of Texts And Comparing That Across Texts And Time.</p>
                  </div>
               </div>
            </div>
            <div class="accordion-item">
               <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong> Browser Compatible </strong> 
                  </button>
               </h2>
               <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                     <p>iTextAnalyzer Word Counter Application Works In Any Web Browsers Such As Chrome, Firefox, Internet Explorer, Safari, Opera And Mobile Phones. It Suits To Count Characters In Facebook, Blog, Books, Excel Document, Pdf Document, Essays, Etc.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </>
}

export default About

