import React, { useState } from 'react';

function ChangePasswordForm({ onSubmit, onCancel }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = () => {
    if (newPassword !== confirmNewPassword) {
      alert('New password and confirm password do not match.');
      return;
    }
    alert('Password Changed Successfully')
    onSubmit(newPassword);
  };

  return (
    
    <div className="d-flex flex-column align-items-center">
        &nbsp;

      <div className="form-group">
        <label>New Password</label>
        <input
          type="password"
          className="form-control"
          style={{ width: '300px', textAlign: 'center' }} // Adjust the width here
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Confirm New Password</label>
        <input
          type="password"
          className="form-control"
          style={{ width: '300px', textAlign: 'center' }} // Adjust the width here
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
                &nbsp;
                &nbsp;
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mr-2" onClick={handleSubmit}>Submit</button>
        &nbsp;&nbsp;&nbsp;
        <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
