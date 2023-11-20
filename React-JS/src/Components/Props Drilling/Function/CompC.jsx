const CompC = (props) => {
     return <>
          <h1>Function Component C</h1>
          <pre> {JSON.stringify(props)} </pre>

          <h5>Name = {props.Name} </h5>
          <h5>Location = {props.Location} </h5>
     </>
}

export default CompC