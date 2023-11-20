import React, { Component } from 'react'

class Message extends Component {

     Ename = "Prabhakar"
     Eid = 108
     Salary = 45000

     Emp_details = { id: 108, name: 'Prabhakar', salary: 55000, location: 'bangalore' }

     render() {
          return (
               <div>
                    <h3>EId : {this.Eid}</h3>
                    <h2>Name : {this.Ename}</h2>
                    <h3>Salary : {this.Salary}</h3>
                    <hr />

                    <h1> Name = {this.Emp_details.name}</h1>
                    <h1> Salary = {this.Emp_details.salary}</h1>
                    <h1>Location = {this.Emp_details.location} </h1>
               </div>
          )
     }
}

export default Message