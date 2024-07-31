import React from 'react';
import { useLocation } from 'react-router-dom';


function RegisteredOrgs() {
  // Sample data for registered organizations (replace with actual data)
  const registeredOrgs = [
    { id: 1, name: 'Resala', contact: 'Resala@gmail.com', address: 'Aabaas Al Aakkad St, Madinet Nasr' },
    { id: 2, name: 'Egyptian Food Bank', contact: 'FoodBank@gmail.com', address: '8897 9th Street, Mokkatam	Charity' },
    { id: 3, name: 'Hayah Karima', contact: 'Karima@gmail.com', address: '334 St, Degla Maadi' },
    // Add more organizations as needed
  ];
  const userType = new URLSearchParams(location.search).get('userType');


  const handleback = () => {
    
    
      let redirectUrl = '/DonorHome';
      if (userType) {
        redirectUrl += `?userType=${userType}`;
      }
      window.location.href = redirectUrl;
    
  };

  return (
    <div className="container mt-5">
      <h3 className="display-2 mb-4" style={{color:"white"}}>All Registered Organizations</h3>
      <div className="table-responsive"> 
        <table className="table table-bordered table-striped"> 
          <thead className="table-dark"> 
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {registeredOrgs.map(org => (
              <tr key={org.id}>
                <td>{org.id}</td>
                <td>{org.name}</td>
                <td>{org.contact}</td>
                <td>{org.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-3">
            <button className="btn btn-primary"
                onClick={handleback}
            >Back</button>
          </div>
      </div>
    </div>
  );
}

export default RegisteredOrgs;
