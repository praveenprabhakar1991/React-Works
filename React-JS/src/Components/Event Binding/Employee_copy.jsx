import React, { Component } from 'react';

class Employee_copy extends Component {

   state = {
      salary: 35000,
      salaryhike: 0
   }

   render() {
      return <>
         <div className="container">
            <h2>Present Salary : {this.state.salary}</h2>
            <h2>Salary Hike : {this.state.salaryhike} </h2>
            <hr />
            <button className="btn btn-outline-primary mx-2" onClick={() => { this.setState({ salaryhike: this.state.salary + 15000 }) }}> 6 Months</button>
            <button className="btn btn-outline-info mx-2" onClick={() => { this.setState({ salaryhike: this.state.salary + 40000 }) }}> 12 Months</button>
            <button className="btn btn-outline-success mx-2" onClick={() => { this.setState({ salaryhike: this.state.salary + 75000 }) }}> 18 Months</button>
            <button className="btn btn-outline-warning mx-2" onClick={() => { this.setState({ salaryhike: this.state.salary + 125000 }) }}> 24 Months</button>
            <button className="btn btn-outline-danger mx-2" onClick={() => { this.setState({ salaryhike: this.state.salary + 185000 }) }}> 30 Months</button>
         </div>
      </>
   }
}

export default Employee_copy;