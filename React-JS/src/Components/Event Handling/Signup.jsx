import React, { Component } from 'react';

class Signup extends Component {

   state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      checkbox: false
   }

   updateHandler = (event) => {
      this.setState({ [event.target.name]: event.target.value })
   }

   submitHandler = (event) => {
      event.preventDefault()
      alert(JSON.stringify(this.state))
      console.log(this.state)
   }


   render() {
      return <>
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <h2 className='mt-3'>Sign Up Page</h2>

                  {/* Form Starts From Here */}
                  <form className='mt-5' onSubmit={this.submitHandler}>
                     {/* <pre>{JSON.stringify(this.state)}</pre> */}

                     {/* First Row */}
                     <div className="form-row">
                        <div className="form-group col-md-6">
                           <label>First Name</label>
                           <input type="text" name='firstname' className="form-control" onChange={this.updateHandler} />
                        </div>

                        <div className="form-group col-md-6">
                           <label>Last Name</label>
                           <input type="text" name='lastname' className="form-control" onChange={this.updateHandler} />
                        </div>
                     </div>

                     {/* Second Row */}
                     <div className="form-row">
                        <div className="form-group col-md-6">
                           <label>Email</label>
                           <input type="email" name='email' className="form-control" onChange={this.updateHandler} />
                        </div>

                        <div className="form-group col-md-6">
                           <label >Password</label>
                           <input type="password" name='password' className="form-control" onChange={this.updateHandler} />
                        </div>
                     </div>

                     {/* Third Row */}
                     <div className="form-row">
                        <div className="form-group col-md-6">
                           <label >Address 1</label>
                           <input type="text" name='address1' className="form-control" onChange={this.updateHandler} />
                        </div>

                        <div className="form-group col-md-6">
                           <label >Address 2</label>
                           <input type="text" name='address2' className="form-control" onChange={this.updateHandler} />
                        </div>
                     </div>

                     {/* Fourth Row */}
                     <div className="form-row">
                        <div className="form-group col-md-5">
                           <label>City</label>
                           <input type="text" name='city' className="form-control" onChange={this.updateHandler} />
                        </div>

                        <div className="form-group col-md-5">
                           <label>State</label>
                           <input type="text" name='state' className="form-control" onChange={this.updateHandler} />
                        </div>

                        <div className="form-group col-md-2">
                           <label>Zip</label>
                           <input type="text" name='zip' className="form-control" onChange={this.updateHandler} />
                        </div>
                     </div>

                     {/* Fifth Row */}
                     <div className="form-group">
                        <div className="form-check">
                           <input className="form-check-input" name='checkbox' type="checkbox" onChange={this.updateHandler} />
                           <label className="form-check-label">Check Terms and Conditions.</label>
                        </div>
                     </div>

                     <button type="submit" className="btn btn-primary">Sign in</button>
                  </form>
               </div>
            </div>
         </div>
      </>
   }
}

export default Signup;