import React from 'react'

const UserDetails = (props) => {
    return (
        <div>           
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        {/* <pre>{JSON.stringify(props)}</pre> */}
                        <div className="card">
                            <div className="card-header">
                                <img src={props.Selecteduser.image} className='img-fluid' alt="" />
                            </div>
                            <div className="card-body">
                                <ul className='list-group'>
                                    <li className='list-group-item'>{props.Selecteduser.age}</li>
                                    <li className='list-group-item'>{props.Selecteduser.email}</li>
                                    <li className='list-group-item'>{props.Selecteduser.phone}</li>
                                    <li className='list-group-item'>{props.Selecteduser.address.city}</li>
                                    <li className='list-group-item'>{props.Selecteduser.bloodGroup}</li>
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