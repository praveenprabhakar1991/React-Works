import React from 'react'

const UserDetails = (props) => {
   return <>
      {/* <h4>User Details</h4> */}
      {/* <pre> {JSON.stringify(props)} </pre> */}
      <div className="card card-responsive">
         <div className="card-header">
            <img src={props.selectedUser.profile_picture} className='img-fluid' />
         </div>
         <div className="card-body">
            <ul className='list-group'>
               <li className='list-group-item'> Age      : {props.selectedUser.date_of_birth} </li>
               <li className='list-group-item'> Phone    : {props.selectedUser.phone} </li>
               <li className='list-group-item'> State    : {props.selectedUser.state} </li>
               <li className='list-group-item'> Country  : {props.selectedUser.country} </li>
               <li className='list-group-item'> Zip Code : {props.selectedUser.zipcode} </li>
            </ul>
         </div>
      </div>
   </>
}

export default UserDetails
