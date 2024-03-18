import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import logo from '../images/logo.png';
import './Users.css';

function Homepage() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/users')
      .then((res) => {
        console.log(res)
        setData(res.data.results)
      })
      .catch((err) => console.log(err))

  }, [])
  return (
    <div className='container-fluid vh-100 vw-100'>
      <div className='user-logo mt-3 mb-2'>
        <img src={logo} className="logo" alt="logo" /> <small>Mini Project Assessment</small>
      </div>
      <div className='row mt-4' style={{ width: '30%', margin: 'auto' }}>
        <div className='d-flex justify-content-start mb-2'>
          <Link className='btn btn-success' to={'/'}>Home</Link>
        </div>
        <h3 className='center'>Users</h3>
        <table className='table table-bordered table-striped table-hover'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user,index) => {
                return (
                  <tr  key={index}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Homepage