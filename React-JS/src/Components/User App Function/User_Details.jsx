import React from 'react'

const User_Details = (props) => {
    return (
        <div>
            <h2>User_Details</h2> <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        {/* <pre>{JSON.stringify(props)}</pre> */}
                        <div className="card">
                            <div className="card-head">
                                <img src={props.Selected_user.image} alt="" />
                            </div>
                            <div className="card-body">
                                <ul className='list-group'>
                                    <li className='list-group-item'>{props.Selected_user.age}</li>
                                    <li className='list-group-item'>{props.Selected_user.gender}</li>
                                    <li className='list-group-item'>{props.Selected_user.address.city}</li>
                                    <li className='list-group-item'>{props.Selected_user.phone}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User_Details