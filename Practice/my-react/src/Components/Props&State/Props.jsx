import React from 'react'
import State from './State'

const Props = () => {

   let Model = "One plus 6t McLaren Edition"
   let Storage = "256 GB "
   let Price = 49500
   let Display = "6.41 inches (16.28 cm) , Optic AMOLED , 60 Hz Refresh Rate"
   let Performance = "Octa Core (2.8 GHz , Quad Core + 1.8 GHz , Quad core) , Snapdragon 845, 8 GB Storage"
   let Camera = "16 MP + 20 MP Dual Primary Cameras , Dual LED Flash , 16 MP Front Camera"
   let Battery = "3700 mAh, Dash Charging , USB : Type-C Port"  

   return <>
   <div className="container">
      <div className="row">
         <div className="col">
            < State Model = {Model}
             Storage = {Storage}
             Price = {Price}
             Display = {Display}
             Performance = {Performance}
             Camera = {Camera}
             Battery = {Battery}            
             />
         </div>         
      </div>
   </div>

   </>
}

export default Props
