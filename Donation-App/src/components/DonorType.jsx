import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import RegularDonor from '../assets/RegularDonor.png';
import Teacher from '../assets/Teacher.png';
import Doctor from '../assets/Doctor1.png';
import { Link } from 'react-router-dom';
function DonorType() {
  return (
        <>
        <h3 className="display-1" style={{ color: "#e1e6ea", fontWeight: 500 }}>Are you a ?</h3>
          <div className="btn-group" role="group" aria-label="Basic example">
            <Link to="/DonorRegister">        
                <button type="button" className="btn btn-dark" style={{ backgroundColor: '#1e2c38' }}>
                <img src={RegularDonor} alt="Description" width="400" height="400"/>
                </button>
            </Link>
            <Link to="/TeacherRegister"><button type="button" className="btn btn-dark" style={{ backgroundColor: '#1e2c38' }}>
              <img src={Teacher} alt="Description" width="400" height="400"/>
            </button>
            </Link>   
            <Link to="/DocRegister"><button type="button" className="btn btn-dark" style={{ backgroundColor: '#1e2c38' }}>
              <img src={Doctor} alt="Description" width="400" height="400"/>
            </button></Link>
            
          </div>
        </>
    
      )
}

export default DonorType