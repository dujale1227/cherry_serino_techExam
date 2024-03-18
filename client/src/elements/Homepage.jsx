import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Hompage.css';
import { Link } from "react-router-dom"
import logo from '../images/logo.png';

function Homepage() {
  const [data, setData] = useState([])
  const [values, setValues] = useState({
    clat: '14.552036595352455',
    clong: '121.01696118771324',
    dist: null,
    prize: 10
  })
  const [submitted, distSubmitted] = useState(false);
  const [errors, setError] = useState({});
  const [errorsStat, setErrorStat] = useState(false);

  function FindTreasure(e) {
    e.preventDefault();
    setError(validateValues(values));
      axios.post(`/api/treasuresDistance`, values)
      .then((res) => {
        if (res.data.success) {
          console.log(res)
          setData(res.data.result);
          distSubmitted(true);
        } else {
          alert(res.data.message)
        }
      })
      .catch((err) => {
        distSubmitted(false);
        console.log(err)
      })
    
  }
  function isDecimal(num) {
    return (num % 1);
  }
  const validateValues = (values) => {
    let errors = {};
    if (!values.clat) {
      errors.clat = "Current latitude is required";
    }
    if (!values.clong) {
      errors.clong = "Current longtitude is required";
    }
    if (!values.dist || values.dist != 1 && values.dist != 10) {
      errors.dist = "Distance value must be 1 or 10.";
    }
    if (isDecimal(values.prize)) {
      errors.prize = "Prize value must be a whole number and range from $10 to $30.";
    }
    return errors;
  };
  return (

    <div className='container-fluid vh-100 vw-100'>
      <div className='treas-logo mt-3 mb-2'>
        <img src={logo} className="logo" alt="logo" /> <small>Mini Project Assessment</small>
      </div>
      <div className='row mt-4' style={{ width: '30%', margin: 'auto'}}>
        <div className='d-flex justify-content-start mb-2'>
          <Link className='btn btn-success' to={'/users'}>Users</Link>
        </div>
       
        <form align="center" onSubmit={FindTreasure} style={{margin: 'auto', border: 'solid 1px #00a1ff' }}>
          <h4>Current Location</h4>
          <div className='form-group '>
            <label htmlFor="clat">Latitude: </label>
            <input type="text" className='form-control' value={values.clat} name="clat" required onChange={(e) => setValues({ ...values, clat: e.target.value })} />
          </div>
          <div className='form-group'>
            <label htmlFor="clong">Longitude: </label>
            <input type="text" className='form-control' value={values.clong} name="clong" required onChange={(e) => setValues({ ...values, clong: e.target.value })} />
          </div>
          <div className='form-group'>
            <label htmlFor="dist">Distance in km: </label>
            <input type="number" className='form-control' name="dist" required placeholder='Input 1 or 10 for distance' onChange={(e) => setValues({ ...values, dist: e.target.value })} />
            {errors.dist ? (<p className="text-danger"> {errors.dist}</p>) : null}
          </div>
          <div className='form-group'>
            <label htmlFor="prize">Prize Value: </label>
            <input type="range" className="form-range" min="10" max="30" step="0.5" id="prize" name="prize" value={values.prize} onChange={(e) => setValues({ ...values, prize: e.target.value })} />
            <output id="prizeVal" name="prizeVal" htmlFor="prize">$10 - ${values.prize}</output>
            {errors.prize ? (<p className="text-danger"> {errors.prize}</p>) : null}
          </div>
          <div className='form-group my-3'>
            <button type='submit' className='btn btn-primary'>Find Treasure</button>  
          </div>
          <br />
        </form>
      </div>
      {
        submitted &&
        <div className='row mt-4 treas-table'>
          <h3 className='center'>Treasures</h3>
          <table className='table table-bordered table-striped table-hover'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Latitude</th>
                <th>Longtitude</th>
                <th>Prize</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((treas, index) => {
                  return (
                    <tr key={index}>
                      <td >{treas.name}</td>
                      <td>{treas.latitude}</td>
                      <td>{treas.longtitude}</td>
                      <td>{treas.prize ? treas.prize : <small className='text-danger'>No minimum prize was found based on the prize range input.</small>}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}
export default Homepage