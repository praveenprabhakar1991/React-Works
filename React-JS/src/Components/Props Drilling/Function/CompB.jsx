import CompC from './CompC'

let CompB = (props) => {
     return <>
          <h1>Function Component B</h1>

          {/* using pre Tag for Debugging Purpose */}
          <pre> {JSON.stringify(props)} </pre>

          <h5> Name = {props.Details.name} </h5>
          <h5> Salary = {props.Details.salary} </h5>
          <h5> Location = {props.Details.location} </h5>
          <hr />
          <CompC Name={props.Details.name} Location={props.Details.location} />
     </>
}

export default CompB