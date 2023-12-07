import React from 'react'

const UserList = (props) => {

   let selectedUserHandler = (user) => {
      props.selectedUser(user)
   }

   return <>
      {/* <h5>UserList</h5>
      <pre> {JSON.stringify(props)} </pre> */}
      <div className="container mt-5">
         <div className="row">
            <div className="col">
               <table className='table table-hover shadow-sm'>
                  <thead className='bg-danger text-warning shadow-sm'>
                     <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        props.users.map((user) => {
                           return <tr key={user.id} onMouseOver={selectedUserHandler.bind(this, user)} >
                              <td>{user.id}</td>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.address.city}</td>
                              <td>{user.phone}</td>
                           </tr>
                        })
                     }
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </>

}

export default UserList
