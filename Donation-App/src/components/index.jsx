import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';




import Donor from '../assets/Donor.png';
import Admin from '../assets/Admin.png';
import Organization from '../assets/Organization.png';


function index() {
  return (
    <>
    <h3 className="display-1" style={{ color: "#9bcefa", fontWeight: 500 }}>Are you a / an ?</h3>
      <div className="btn-group" role="group" aria-label="Basic example">
      <Link to="/DonorType">
            <button type="button" className="btn btn-dark" style={{ backgroundColor: '#1e2c38' }}>
            <img src={Donor} alt="Description" width="400" height="400"/>
            </button>
      </Link>
      <Link to="/AdminLogin">
        <button type="button" className="btn btn-dark" style={{ backgroundColor: '#1e2c38' }}>
          <img src={Admin} alt="Description" width="400" height="400"/>
        </button>
        </Link>
        <Link to="/OrganizationRegister">
        <button type="button" className="btn btn-dark" style={{ backgroundColor: '#1e2c38' }}>
          <img src={Organization} alt="Description" width="400" height="400"/>
        </button>
        </Link>
      </div>
    </>

  )
}

export default index