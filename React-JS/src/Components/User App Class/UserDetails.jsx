import React, { Component } from 'react'

class UserDetails extends Component {
   render() {
      return <>
         {/* <h2>User Details</h2> */}
         <div className="container mt-5">
            {/* <pre> {JSON.stringify(this.props.selectedusers)} </pre> */}
            <div className="card">
               <img src={this.props.selectedusers.image} className='img-fluid' alt='' />
               <div className="card-header">
                  <p> {this.props.selectedusers.username} </p><hr />
                  <p> {this.props.selectedusers.email} </p><hr />
                  <p> {this.props.selectedusers.phone} </p><hr />
                  <p> {this.props.selectedusers.birthDate} </p><hr />
                  <p> {this.props.selectedusers.bloodGroup} </p>
               </div>
            </div>
         </div>
      </>
   }
}

export default UserDetails