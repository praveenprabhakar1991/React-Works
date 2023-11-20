import React, { Component } from 'react';

class Login extends Component {

   state = {
      username: "",
      password: "",
   }

   emailHandler = (event) => {
      this.setState({ username: event.target.value })
   }
   passwordHandler = (event) => {
      this.setState({ password: event.target.value })
   }

   SubmitHandler = (event) => {
      event.preventDefault();
      console.log(this.state);
      alert(JSON.stringify(this.state))
   }

   render() {
      return <>
         <div className="container">
            {/* <pre>{JSON.stringify(this.state)}</pre> */}
            <div className="row">
               <div className="col-md-5">
                  <h2>Login Form</h2>

                  {/* Form Starts From Here */}
                  <form onSubmit={this.SubmitHandler}>

                     <div className='form-group'>
                        <label>Email Address</label>
                        <input type="email" className='form-control' onChange={this.emailHandler} />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                     </div>

                     <div className='form-group'>
                        <label>Password</label>
                        <input type="password" className='form-control' onChange={this.passwordHandler} />
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