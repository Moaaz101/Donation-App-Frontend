import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AdAccountManagement() {
  const [registeredUsers, setRegisteredUsers] = useState([]); // State to store registered users
  const [selectedUser, setSelectedUser] = useState(null); // State to store selected user

  useEffect(() => {
    // Fetch registered users data from the server or API
    // For demonstration purposes, initializing with dummy data
    const dummyRegisteredUsers = [
      { id: 1, name: 'Ahmed Ali', email: 'ahmed@example.com', type: 'Donor' },
      { id: 2, name: 'Fatma Mohamed', email: 'fatma@example.com', type: 'Organization' },
      { id: 3, name: 'Khaled Hassan', email: 'khaled@example.com', type: 'Donor' },
      { id: 4, name: 'Egyptian Red Crescent', email: 'redcrescent@example.com', type: 'Organization' },
      { id: 5, name: 'Coptic Orphans', email: 'coptichorphans@example.com', type: 'Organization' },
    ];
    setRegisteredUsers(dummyRegisteredUsers);
  }, []);

  // Function to handle back button click
  const handleBack = () => {
    // Navigate back to AdminHome page
    window.history.back();
  };

  // Function to handle user selection
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  // Function to handle account deletion
  const handleDeleteAccount = (userId) => {
    // Filter out the selected user from the registeredUsers array
    const updatedUsers = registeredUsers.filter(user => user.id !== userId);
    // Update the state with the new array of registeredUsers
    setRegisteredUsers(updatedUsers);
    // Reset the selectedUser state
    setSelectedUser(null);
  };

  // Function to handle viewing user activity
  const handleViewActivity = (userId) => {
    // Logic to view user activity with given ID
    console.log(`Viewing activity of user with ID ${userId}`);
  };

  return (
    <div className="container-fluid p-0 m-0" style={{ width: '100vw', height: '100vh', color:"white"}}>
                    <br></br><br></br>

      <h3 className="display-3" style={{ fontWeight: 400 }}>Account Management</h3>
      <br></br><br></br>

      <div className="mb-3">
        <Link to="/AdminHome" className="btn btn-primary mb-3" style={{ paddingLeft: "30px", paddingRight: "30px", alignItems: "center" }}>Back</Link>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered" style={{ width: "80%" , margin: "20px auto 0" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.type}</td>
                <td>
                  <button className="btn btn-primary mr-2" onClick={() => handleViewActivity(user.id)}>View Activity</button>
                  <button className="btn btn-danger" onClick={() => handleDeleteAccount(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <div>
          <h4>Selected User Details</h4>
          <p>Name: {selectedUser.name}</p>
          <p>Email: {selectedUser.email}</p>
          <p>Type: {selectedUser.type}</p>
          <p>Activity: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris nec felis scelerisque dictum. Integer sit amet nisl condimentum, viverra diam et, vestibulum eros.</p>
        </div>
      )}
    </div>
  );
}

export default AdAccountManagement;
