import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import UserList from './UserList'
import UserDetails from './UserDetails'

const UserApp = () => {

    let [Users, setUsers] = useState({});
    let [Selecteduser, setSelecteduser] = useState({})

    useEffect(() => {
        Axios.get('https://dummyjson.com/user')
            .then((response) => {
                setUsers(response.data)
            })
            .catch(() => { })
    }, [])

    let SelectedUserHandler = (users) => {
        setSelecteduser(users)
    }

    return (
        <div>
            <div className="container mt-5">
                <h1>Users Component</h1><hr />
                <div className="row">
                    {/* <pre> {JSON.stringify(Users)} </pre> */}
                    <div className="col-md-8">
                        {
                            Object.keys(Users).length > 0 ? <> <UserList users={Users.users} Selecteduser={SelectedUserHandler} /></> : null
                        }

                    </div>
                    <div className="col-md-4">
                        {
                            Object.keys(Selecteduser).length > 0 ? <> <UserDetails Selecteduser={Selecteduser} /></> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserApp