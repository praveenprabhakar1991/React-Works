import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Datas from './Data'

const EmployeeTable = () => {

   const [currentPage, setCurrentPage] = useState(1)

   const recordsPerPage = 10
   const lastIndex = currentPage * recordsPerPage
   const firstIndex = lastIndex - recordsPerPage
   const records = Datas.slice(firstIndex, lastIndex)
   const nPage = Math.ceil(Datas.length / recordsPerPage)
   const numbers = [...Array(nPage + 1).keys()].slice(1)

   const previousHandler = () => {
      if (currentPage !== 1) {
         setCurrentPage(currentPage - 1)
      }
   }

   const changeCurrentPageHandler = (data) => {
      setCurrentPage(data)
   }

   const nextHandler = () => {
      if (currentPage !== nPage) {
         setCurrentPage(currentPage + 1)
      }
   }

   return <>
      <div className="container mt-5">
         <div className="row justify-content-center">
            <div className="col-md-8">
               <table className='table table-hover'>
                  <thead className='bg-primary text-white'>
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
                        records.map((data) => {
                           return <tr key={data}>
                              <td> {data.id} </td>
                              <td> {data.first_name} </td>
                              <td> {data.last_name} </td>
                              <td> {data.gender} </td>
                              <td> {data.email} </td>
                              <td> {data.Address} </td>
                           </tr>
                        })
                     }
                  </tbody>
               </table>
               <div>
                  <nav className='mt-5'>
                     <ul className='pagination justify-content-center' >
                        <li className='page-item'>
                           <Link to="#" className='page-link' onClick={previousHandler}>Prev</Link>
                        </li>
                        {
                           numbers.map((n) => (
                              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={{ n }}>
                                 <Link to="#" className='page-link' onClick={() => changeCurrentPageHandler(n)} > {n} </Link>
                              </li>
                           ))
                        }
                        <li className='page-item'>
                           <Link to="#" className='page-link' onClick={nextHandler}>Next</Link>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   </>
}

export default EmployeeTable
