import React from "react"
import CompB from "./CompB"

class CompA extends React.Component {

     Emp_details = { id: 108, name: 'Prabhakar', salary: 55000, location: 'Bangalore' }

     render() {
          return <>
               <h1>Class Component A</h1>

               <h5>Id = {this.Emp_details.id} </h5>
               <h5>Name = {this.Emp_details.name} </h5>
               <h5>Salary = {this.Emp_details.salary} </h5>
               <h5>Location = {this.Emp_details.location} </h5>
               <hr />

               <CompB Name={this.Emp_details.name} Salary={this.Emp_details.salary} Location={this.Emp_details.location} />
          </>
     }
}

export default CompA