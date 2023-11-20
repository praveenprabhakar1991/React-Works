import React from 'react'

class OnePlus_B extends React.Component {

  render() {
    return <>
      <h1>Mobile Specification</h1>
      <pre>{JSON.stringify(this.props)}</pre>
      <hr />
      <h3>Model   : {this.props.Model}</h3>
      <h3>Storage : {this.props.Storage}</h3>
      <h3>Price   : {this.props.Price}</h3>
      <h3>Display : {this.props.Display}</h3>
      <h3>Performance : {this.props.Performance}</h3>
      <h3>Camera  : {this.props.Camera}</h3>
      <h3>Battery : {this.props.Battery}</h3>
    </>
  }

}

export default OnePlus_B