import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrganizationHome = () => {
  const [showNotification, setShowNotification] = useState(false);

  // Function to handle showing the notification
  const handleShowNotification = () => {
    setShowNotification(true);
    // Set a timeout to hide the notification after a certain period
    setTimeout(() => {
      setShowNotification(false);
    }, 5000); // Hide notification after 5 seconds
  };

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2 className="mb-4">Organization Home</h2>
        <div className="d-grid gap-2">
          <Link to="http://localhost:5173/FullfilledDonations" className="btn btn-primary">Fullfilled Donation Posts</Link>
          <Link to="http://localhost:5173/DonationCategory" className="btn btn-primary">New Donation Post</Link>
          <Link to="http://localhost:5173/PendingPosts" className="btn btn-primary">Pending Post</Link>
          <Link to="/OrganizationAcc" className="btn btn-primary">Account</Link>

        </div>
      </div>
      {/* Bell button positioned in the top right corner */}
      <div className="position-fixed top-0 end-0 p-3">
      <div class="btn-group" role="group" aria-label="Basic example">
        <button onClick={handleShowNotification} className="btn btn-primary ">
          <i className="bi bi-bell"></i> NOTIFICATIONS
        </button>
        <Link className='btn btn-danger' to="/OrganizationLogin">Logout</Link>
        </div>
      </div>
      {/* Notification message */}
      {showNotification && (
        <div className="position-fixed bottom-0 end-0 p-3">
          <div className="alert alert-success" role="alert">
            New Medical Donation Post fulfilled by Abdelrahman Elzeiny 3 mins ago
          </div>
        </div>
      )}
    </div>
  );
};

export default OrganizationHome;