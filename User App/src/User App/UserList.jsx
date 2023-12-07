import React from 'react'

const UserList = (props) => {

  let SelectedUserHandler = (users) => {
    console.log(users)
    props.Selecteduser(users)
  }

  return (
    <div>   
      {/* <pre>{JSON.stringify(props.users)}</pre> */}
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <table className='table table-hover'>
              <thead className='bg-info text-white'>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Location</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.users.map((users) => {
                    return <tr key={users.id} onClick={SelectedUserHandler.bind(this, users)}>
                      <td>{users.id}</td>
                      <td>{users.firstName}</td>
                      <td>{users.lastName}</td>
                      <td>{users.address.city}</td>
                      <td>{users.phone}</td>
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