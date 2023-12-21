import React, { useState } from 'react'

const Calcy = () => {

   const [value, setValue] = useState("")

   let onChangeHandler = (e) => {
      setValue(e.target.value)
   }

   const handleCalculate = () => {
      try {
         setValue(new Function('return' + value)().toString())
      } catch (error) {
         setValue('0')
      }
   }

   return <>

      <div className="container">
         <div className="row justify-content-center">
            <div className="col-md-4">
               <div className="card border-primary shadow-sm ">
                  <form className='m-3'>
                     <div>
                        <input type="text" value={value} onChange={onChangeHandler} placeholder='0' className='form-control shadow-sm text-end' style={{ height: "50px" }} />
                     </div>
                     <div className='row mt-3 '>
                        <div className="col-md-3">
                           <input type="button" value="CE" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue("") }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="Del" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value.slice(0, -1)) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="%" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="/" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                     </div>
                     <div className='row mt-3'>
                        <div className="col-md-3">
                           <input type="button" value="7" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="8" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="9" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="*" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                     </div>
                     <div className='row mt-3'>
                        <div className="col-md-3">
                           <input type="button" value="4" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="5" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="6" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="-" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                     </div>
                     <div className='row mt-3'>
                        <div className="col-md-3">
                           <input type="button" value="1" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="2" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="3" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="+" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                     </div>
                     <div className='row mt-3'>
                        <div className="col-md-3">
                           <input type="button" value="0" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="00" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="." className='btn btn-outline-light text-primary form-control shadow-sm' onClick={(e) => { setValue(value + e.target.value) }} />
                        </div>
                        <div className="col-md-3">
                           <input type="button" value="=" className='btn btn-outline-light text-primary form-control shadow-sm' onClick={handleCalculate} />
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </>
}

export default Calcy