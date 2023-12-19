import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = (props) => {
  let selectedHandler = (user) => {
    props.selectedUser(user);
  };

  const [currentPage, setCurrentPage] = useState(1);
  let recordsPerPage = 10;
  let lastIndex = currentPage * recordsPerPage;
  let firstIndex = lastIndex - recordsPerPage;
  let records = props.users.slice(firstIndex, lastIndex);
  let nPage = Math.ceil(props.users.length / recordsPerPage);
  let numbers = [...Array(nPage + 1).keys()].slice(1);

  const previousHandler = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPageHandler = (page) => {
    setCurrentPage(page);
  };

  const nextHandler = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {/* <h4>User List</h4> */}
      {/* <pre>{JSON.stringify(props)}</pre> */}
      <table className='table table-hover table-responsive'>
        <thead className='bg-primary'>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Job</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {records.map((user) => {
            return (
              <tr key={user.id} onClick={() => selectedHandler(user)}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.gender}</td>
                <td>{user.job}</td>
                <td>{user.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <nav className='mt-5 '>
        <ul className='pagination justify-content-center'>
          <li className='page-item'>
            <Link to="#" className='page-link' onClick={previousHandler}>
              Prev
            </Link>
          </li>
          {numbers.map((n) => (
            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={n}>
              <Link to="#" className='page-link' onClick={() => changeCurrentPageHandler(n)}>
                {n}
              </Link>
            </li>
          ))}
          <li className='page-item'>
            <Link to="#" className='page-link' onClick={nextHandler}>
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default UserList;
