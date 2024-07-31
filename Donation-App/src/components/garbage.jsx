import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function AdminHome() {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleLogout = () => {
    // Perform logout actions, such as clearing session or redirecting to login page
    // For simplicity, I'm just redirecting to the login page here
    window.location.href = '/AdminLogin';
  };

  const handleChangePassword = () => {
    setShowChangePassword(true);
  };

  const handleSubmitPasswordChange = () => {
    if (newPassword !== confirmNewPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    // Perform password change actions, such as sending a request to the server
    // For simplicity, I'm just logging the new password to the console
    console.log('New password:', newPassword);
    // Reset fields and hide change password form
    setNewPassword('');
    setConfirmNewPassword('');
    setShowChangePassword(false);
  };

  return (
    <div className="container-fluid p-0 m-0" style={{ width: '100vw', height: '100vh',backgroundColor: 'navy', color: 'navy' }}> 
      <div className="card custom-card m-0" style={{ height: '100%' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-4">Admin Dashboard</h3>
            <div>
              <button className="btn btn-secondary mr-2" onClick={handleChangePassword}>Change Password</button>
              <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
          </div>
          {showChangePassword && (
            <div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleSubmitPasswordChange}>Submit</button>
            </div>
          )}
          <div className="d-flex justify-content-between mt-5">
            <Link to="/AdOrganizationRequests" className="btn btn-lg btn-primary" style={{ width: '20%', fontSize: '2.0em', textAlign: 'center', padding: '150px 50px' }}>
              <img src="src/icons/organization_icon.png" alt="Organization Icon" style={{ marginBottom: '10px', width: '60px', height: '50px' }} />
              <br />
              Organization Requests
            </Link>
            <Link to="/AdRegisteredOrganizations" className="btn btn-lg btn-primary" style={{ width: '20%', fontSize: '1.9em', textAlign: 'center', padding: '150px 50px' }}>
              <img src="src/icons/registered_org_icon.png" alt="Registered Org Icon" style={{ marginBottom: '10px', width: '60px', height: '50px' }} />
              <br />
              Registered Organizations
            </Link>
            <Link to="/AdAccountManagement" className="btn btn-lg btn-primary" style={{ width: '20%', fontSize: '2.0em', textAlign: 'center', padding: '150px 50px' }}>
              <img src="src/icons/account_management_icon.png" alt="Account Management Icon" style={{ marginBottom: '10px', width: '60px', height: '50px' }} />
              <br />
              Account Management
            </Link>
            <Link to="/AdDonorRequests" className="btn btn-lg btn-primary" style={{ width: '20%', fontSize: '2.0em', textAlign: 'center', padding: '150px 50px' }}>
              <img src="src/icons/donor_requests_icon.png" alt="Donor Requests Icon" style={{ marginBottom: '10px', width: '60px', height: '50px' }} />
              <br />
              Donor Requests
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
