import CompB from './CompB'

let CompA = () => {

     let Emp_details = { id: 108, name: 'Prabhakar', salary: 55000, location: 'Bangalore' }

     return (
          <>
               <h1>Function Component A</h1>
               <h5>Id = {Emp_details.id} </h5>
               <h5>Name = {Emp_details.name} </h5>
               <h5>Salary = {Emp_details.salary} </h5>
               <h5>Location = {Emp_details.location} </h5>
               <hr />
               <CompB Details = {Emp_details} />
          </>
     )

}

export default CompA