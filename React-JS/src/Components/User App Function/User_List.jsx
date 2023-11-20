import React from 'react'

const User_List = (props) => {

  let Selected_UserHandler = (users) => {
    console.log(users)
    props.Selected_user(users)
  }

  return (
    <div>
      <h2>User_List</h2> <hr />
      {/* <pre>{JSON.stringify(props.users)}</pre> */}
      <div className="container">
        <div className="row">
          <div className="col">
            <table className='table table-hover table-striped'>
              <thead className='bg-primary'>
                <tr>
                  <th>Id</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                {
                  props.users.map((users) => {
                    return <tr key={users.id} onClick={Selected_UserHandler.bind(this, users)}>
                      <td>{users.id}</td>
                      <td>{users.firstName}</td>
                      <td>{users.lastName}</td>
                      <td>{users.email}</td>
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

export default User_List