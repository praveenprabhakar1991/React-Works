import React from 'react'

const UserList = (props) => {

  let SelectedUserHandler = (users) => {
    console.log(users)
    props.Selecteduser(users)
  }

  return (
    <div>   
      {/* <pre>{JSON.stringify(props.users)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <table className='table table-hover'>
              <thead className='bg-info text-white'>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Gender</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.users.map((users) => {
                    return <tr key={users.id} onClick={SelectedUserHandler.bind(this, users)}>
                      <td>{users.id}</td>
                      <td>{users.firstName}</td>
                      <td>{users.lastName}</td>
                      <td>{users.gender}</td>
                      <td>{users.address.address}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UserList