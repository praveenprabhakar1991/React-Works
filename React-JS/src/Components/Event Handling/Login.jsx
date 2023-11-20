import React, { Component } from 'react';

class Login extends Component {

   state = {
      email: "",
      password: ""
   }

   render() {
      return <>
         <div className="container">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
               <div className="col-md-5">
                  <h2>Login Form</h2>

                  {/* Form Starts From Here */}
                  <form onSubmit={(event) => { event.preventDefault(); alert(JSON.stringify(this.state)) }}>

                     <div className='form-group'>
                        <label>Email Address</label>
                        <input type="email" className='form-control' onChange={(event) => { this.setState({ email: event.target.value }) }} />

                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                     </div>

                     <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className='form-control' onChange={(event) => { this.setState({ password: event.target.value }) }} />
                     </div>

                     <div>
                        <input type="submit" value='Login' className='btn btn-primary' />
                     </div>

                  </form>
               </div>
            </div>
         </div>
      </>
   }
}

export default Login;