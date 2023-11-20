/* import React from 'react' */

let OnePlus_B = (props) => {

  return <div>
    <h1>Mobile Specification</h1>
    <pre>{JSON.stringify(props)}</pre>
    <hr />
    <h3> Model   : {props.Model}</h3>
    <h3> Storage : {props.Storage}</h3>
    <h3> Display : {props.Display}</h3>
    <h3> Performance : {props.Performance}</h3>
    <h3> Camera : {props.Camera}</h3>
    <h3> Battery : {props.Battery}</h3>
    <h3> Price   : {props.Price}</h3>
  </div>
}

export default OnePlus_B