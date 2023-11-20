import React from 'react'
import Axios from 'axios'
import UserDetails from './UserDetails'
import UserList from './UserList'

class UserApp extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         users: [],
         selectedusers: []
      }
   }

   selectedusers = (users) => {
      this.setState({ selectedusers: users })
   }

   componentDidMount() {
      let Url = "https://dummyjson.com/users"
      Axios.get(Url)
         .then((response) => {
            this.setState({ users: response.data })
         })
         .catch((err) => { })
   }

   render() {
      return <>
         <h1>Users Component</h1>
         {/* <pre> {JSON.stringify(this.state.users)} </pre> */}
         <div className="container">
            <div className="row">
               <div className="col-md-8">
                  {Object.keys(this.state.users).length > 0 && < UserList users={this.state.users.users} selectedusers={this.selectedusers} />}
               </div>
               <div className="col-md-4">
                  {Object.keys(this.state.users).length > 0 && < UserDetails selectedusers={this.state.selectedusers} />}  </div>
            </div>
         </div>
      </>
   }
}

export default UserApp