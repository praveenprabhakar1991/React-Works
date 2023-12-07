import React from 'react'

const UserDetails = (props) => {
   return <>
      {/* <h5>User Details</h5>
      <pre> {JSON.stringify(props)} </pre> */}
      <div className="container mt-5 sticky-top">
         <div className="row ">
            <div className="col">
               <div className="card">
                  <div className="card-header">
                  <img src={props.selectedUser.image} alt="User-Image" className='img-fluid' />
                  </div>
                  <div className="card-body">
                     <h6> UserName : {props.selectedUser.username}</h6><hr />
                     <h6> Emial : {props.selectedUser.email}</h6><hr />
                     <h6> D.O.B : {props.selectedUser.birthDate}</h6><hr />
                     <h6> Age : {props.selectedUser.age}</h6><hr />
                     <h6> BloodGroup : {props.selectedUser.bloodGroup}</h6>

                  </div>
               </div>
            </div>
         </div>
      </div>
   </>
}

export default UserDetails