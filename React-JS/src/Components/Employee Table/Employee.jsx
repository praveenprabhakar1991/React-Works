import React, { Component } from 'react';
import Datas from './Data'

class Employee extends Component {
   render() {
      return <>
         {/* <pre> {JSON.stringify(Datas)} </pre> */}
         <div className="container mt-3">
            <div className="row">
               <h2>Employees Table</h2>
               <div className="col-md-10">
                  <table className="table table-hover mt-3">
                     <thead className="bg-primary text-white">
                        <tr>
                           <th>Id</th>
                           <th>First Name</th>
                           <th>Last Name</th>
                           <th>Gender</th>
                           <th>Email</th>
                           <th>Address</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           Datas.map((Data) => {
                              return <tr key={Data.id}>
                                 <th> {Data.id} </th>
                                 <th> {Data.first_name} </th>
                                 <th> {Data.last_name} </th>
                                 <th> {Data.gender} </th>
                                 <th> {Data.email} </th>
                                 <th> {Data.Address} </th>
                              </tr>
                           })
                        }
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </>
   }
}

export default Employee;