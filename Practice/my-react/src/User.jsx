import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import UserList from './UserList'
import UserDetails from './UserDetails'

const User = () => {

   let [Users, setUsers] = useState({})
   let [selectedUser, setSelecetedUser] = useState({})

   useEffect(() => {
      let Url = 'https://dummyjson.com/user'
      Axios.get(Url)
         .then((response) => {
            setUsers(response.data)
         })
         .catch((err) => {
            console.log(Error)
         })
   }, [])

   let selectedUserHandler = (user) => {
      setSelecetedUser(user)
   }

   return <>
      {/* <h1>User App</h1>
      <pre> {JSON.stringify(Users)} </pre> */}
      <div className="container mt-5">
         <div className="row">
            <div className="col-md-8">
               {Object.keys(Users).length > 0 && < UserList users={Users.users} selectedUser={selectedUserHandler} />}
            </div>
            <div className="col-md-4">
               {Object.keys(Users).length > 0 && < UserDetails selectedUser={selectedUser} />} </div>
         </div>
      </div>
   </>
}

export default User
