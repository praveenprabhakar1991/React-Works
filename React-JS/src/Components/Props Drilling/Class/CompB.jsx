import React from "react"
import CompC from "./CompC"

class CompB extends React.Component {

     render() {
          return <>
               <h1>Class Component B</h1>
               <pre>{JSON.stringify(this.props)}</pre>

               <h5>Name = {this.props.Name} </h5>
               <h5>Salary = {this.props.Salary} </h5>
               <h5>Location = {this.props.Location} </h5>
               <hr />

               <CompC Name={this.props.Name} Location={this.props.Location} />
          </>
     }

}

export default CompB