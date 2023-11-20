import React, { Component } from 'react'

class UserList extends Component {

   selectedusers = (users) => {
      this.props.selectedusers(users)
   }

   render() {
      return <>
         {/* <h2>User List </h2> */}
         <div className="container mt-5">
            {/* <pre> {JSON.stringify(this.props.users)} </pre> */}
            <table className='table table-hover table-striped'>
               <thead className='bg-info'>
                  <tr>
                     <th>Id</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Genger</th>
                     <th>Location</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     this.props.users.map((users) => {
                        return <tr key={users.id} onClick={this.selectedusers.bind(this, users)} >
                           <td> {users.id} </td>
                           <td> {users.firstName} </td>
                           <td> {users.lastName} </td>
                           <td> {users.gender} </td>
                           <td> {users.address.city} </td>
                        </tr>
                     })
                  }
               </tbody>
            </table>
         </div>
      </>
   }
}

export default UserList
