import React from 'react'

class CompC extends React.Component {
     render() {
          return <>
               <h1>Class Component C</h1>
               <pre>{JSON.stringify(this.props)}</pre>

               <h5> Name = {this.props.Name} </h5>
               <h5> Location = {this.props.Location} </h5>
          </>
     }
}

export default CompC