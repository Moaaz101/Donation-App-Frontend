import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChangePasswordForm from './ChangePasswordForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AdminHome() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  

  const handleChangePassword = () => {
    setShowChangePassword(true);
  };

  const handleSubmitPasswordChange = (password) => {
    // Perform password change actions
    console.log('New password:', password);
    // Reset fields and hide change password form
    setNewPassword('');
    setShowChangePassword(false);
  };

  const handleCancelPasswordChange = () => {
    setShowChangePassword(false);
  };

  return (
    <div className=" container-fluid p-0 m-0" style={{ width:  '100vw', height: '100vh', color: 'color' }}>
          <div className=" m-5 d-flex justify-content-between align-items-center">
            <h3 className="display-3 mb-4" style={{color:"white"}}>Admin Dashboard</h3>
            <div>
              <button className="btn btn-secondary mr-2" onClick={handleChangePassword}>Change Password</button>
                &nbsp;&nbsp;&nbsp;
               <Link to="/AdminLogin">
               <button className="btn btn-danger" href="/AdminLogin">Logout</button>
               </Link>
            </div>
          </div>
          {showChangePassword ? (
            <ChangePasswordForm onSubmit={handleSubmitPasswordChange} onCancel={handleCancelPasswordChange} />
          ) : (
          <div className="m-3 d-flex justify-content-between ">
            <Link to="/AdOrganizationRequests" className="btn  btn-primary" style={{ width: '18%', fontSize: '2.0em', textAlign: 'center', padding: '80px 50px' }}>
              <img src="src/icons/organization_icon.png" alt="Organization Icon" style={{ marginBottom: '5px', width: '60px', height: '50px' }} />
              <br />
              Organization Requests
            </Link>
            <Link to="/AdRegisteredOrganizations" className="btn  btn-primary" style={{ width: '18%', fontSize: '1.9em', textAlign: 'center', padding: '80px 50px' }}>
              <img src="src/icons/registered_org_icon.png" alt="Registered Org Icon" style={{ marginBottom: '5px', width: '60px', height: '50px' }} />
              <br />
              Registered Organizations
            </Link>
            <Link to="/AdAccountManagement" className="btn  btn-primary" style={{ width: '18%', fontSize: '2.0em', textAlign: 'center', padding: '80px 50px' }}>
              <img src="src/icons/account_management_icon.png" alt="Account Management Icon" style={{ marginBottom: '5px', width: '60px', height: '50px' }} />
              <br />
              Account Management
            </Link>
            <Link to="/AdDonorRequests" className="btn  btn-primary" style={{ width: '18%', fontSize: '2.0em', textAlign: 'center', padding: '80px 50px' }}>
              <img src="src/icons/donor_requests_icon.png" alt="Donor Requests Icon" style={{ marginBottom: '5px', width: '60px', height: '50px' }} />
              <br />
              Donor Volunteer Requests
            </Link>
            <Link to="/AdDonorAccountRequests" className="btn  btn-primary" style={{ width: '18%', fontSize: '1.9em', textAlign: 'center', padding: '80px 0px' }}>
              <img src="src/icons/registered_org_icon.png" alt="Registered Org Icon" style={{ marginBottom: '5px', width: '60px', height: '50px' }} />
              <br />
              New Doctor/Teacher Requests
            </Link>
          </div>
          )}
    </div>
  );
}

export default AdminHome;