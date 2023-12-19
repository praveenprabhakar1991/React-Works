import React, { useState } from 'react'
import image from './oneplus-6t.png'

const State = (props) => {   

   const [Quantity, setQuantity] = useState(1)

   return <>
      <div className="container mt-5">
         <div className="row">
               {/* <pre> {JSON.stringify(props)} </pre> */}
            <div className="col-md-5">
               <div className="card">
                  <div className="card-header">
                     <img src={image} className='img-fluid' />
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="card">
                  <div className="card-body">
                     <ul className='list-group'>
                        <li className='list-group-item'> <h5> Product Name : {props.Model}</h5>  </li>
                        <li className='list-group-item'> <h6> Storage : {props.Storage}</h6>  </li>
                        <li className='list-group-item'> <h6> Display : {props.Display}</h6>  </li>
                        <li className='list-group-item'> <h6> Performance : {props.Performance}</h6>  </li>
                        <li className='list-group-item'> <h6> Camera : {props.Camera}</h6>  </li>
                        <li className='list-group-item'> <h6> Battery : {props.Battery}</h6>  </li>
                        <li className='list-group-item'> <h6> Price : {props.Price}</h6>  </li>
                        <li className='list-group-item'> <h6> Quantity : <i className='fa-solid fa-minus-circle mx-2' onClick={() => { setQuantity(Quantity - 1) }} ></i>  {Quantity} <i className='fa-solid fa-plus-circle mx-2' onClick={() => { setQuantity(Quantity + 1) }} ></i> </h6>  </li>
                        <li className='list-group-item'> <h6> Total :  {Quantity * props.Price} /-</h6>  </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>

   </>
}

export default State
