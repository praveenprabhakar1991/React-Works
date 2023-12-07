import React from 'react'

const UserDetails = (props) => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        {/* <pre>{JSON.stringify(props)}</pre> */}
                        <div className="card ">
                            <div className="card-header">
                                <img src={props.Selecteduser.image} className='img-fluid' alt="" />
                            </div>
                            <div className="card-body">
                                <ul className='list-group'>
                                    <li className='list-group-item'> <h6>User Name : {props.Selecteduser.username}</h6> </li>
                                    <li className='list-group-item'><h6>Email : {props.Selecteduser.email}</h6> </li>
                                    <li className='list-group-item'> <h6>D.O.B : {props.Selecteduser.birthDate} </h6> </li>
                                    <li className='list-group-item'><h6>Age : {props.Selecteduser.address.age} </h6> </li>
                                    <li className='list-group-item'><h6>Blood Group : {props.Selecteduser.bloodGroup}</h6> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserDetails