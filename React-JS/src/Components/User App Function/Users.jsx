import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import User_List from './User_List'
import User_Details from './User_Details'

const Users = () => {

    let [Users, setUsers] = useState({});
    let [Selected_user, setSelected_user] = useState({})

    useEffect(() => {
        Axios.get('https://dummyjson.com/user')
            .then((response) => {
                setUsers(response.data)
            })
            .catch(() => { })
    }, [])

    let Selected_UserHandler = (users) => {
        setSelected_user(users)
    }

    return (
        <div>
            {/* <h1>User App</h1> */}
            <div className="container mt-5">
                <div className="row">
                    {/* <pre> {JSON.stringify(Users)} </pre> */}
                    <div className="col-md-8">
                        {
                            Object.keys(Users).length > 0 ? <>
                                <User_List users={Users.users}
                                    Selected_user={Selected_UserHandler} /></> : null
                        }

                    </div>
                    <div className="col-md-4">
                        {
                            Object.keys(Selected_user).length > 0 ? <>
                                <User_Details Selected_user={Selected_user} /></> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Users