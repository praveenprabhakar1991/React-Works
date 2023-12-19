import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import UserList from './UserList'
import UserDetails from './UserDetails'

const User = () => {

   const [users, setUsers] = useState({})
   const [selectedUser, setSelectedUser] = useState({})   

   useEffect(() => {
      let url = "https://api.slingacademy.com/v1/sample-data/users?limit=50"
      Axios(url)
         .then((response) => {
            setUsers(response.data.users)
         })
         .catch()
   }, [])

   let selectedHandler = (users) => {
      setSelectedUser(users)
   }

   return <>
      <div className="container mt-5">
         {/* <pre> {JSON.stringify(users)} </pre> */}
         <div className="row">
            <div className="col-md-8">
               {users.length > 0 && < UserList users={users} selectedUser={selectedHandler} />}
            </div>
            <div className="col-md-4"> {users.length > 0 && <UserDetails selectedUser={selectedUser} />} </div>
         </div>
      </div>
   </>
}

export default User
