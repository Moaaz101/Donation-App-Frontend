import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function AdRegisteredOrganizations() {
  const [organizations, setOrganizations] = useState([]); // State to store registered organizations
  const [searchTerm, setSearchTerm] = useState(''); // State to store search term
  const [selectedOrganization, setSelectedOrganization] = useState(null); // State to store the selected organization
  const [isDetailPage, setIsDetailPage] = useState(false); // State to track if detail page is active
  const [filterOption, setFilterOption] = useState(''); // State to store the selected filter option

  useEffect(() => {
    // Fetch registered organizations from the server or API
    // For demonstration purposes, initializing with dummy data
    const dummyOrganizations = [
      { id: 1, name: 'Resala', contact: 'Marwan Hassan', address: '123 Aabaas Al Aakkad St, Madinet Nasr', type: 'NGO', description: 'Resala is a non-profit organization that aims to alleviate poverty and provide support to disadvantaged communities in Egypt. They offer various services such as food aid, education, and healthcare.' },
      { id: 2, name: 'Egyptian Food Bank', contact: 'Tarek Adnan', address: '8897 9th Street, Mokkatam', type: 'Charity', description: 'The Egyptian Food Bank is a charitable organization dedicated to fighting hunger and food insecurity in Egypt. They collect surplus food from donors and distribute it to those in need across the country.' },
      { id: 3, name: 'Hayah Karima', contact: 'Sami Ahmed', address: '789 334 St, Degla Maadi', type: 'Non-profit', description: 'Hayah Karima is a non-profit organization focused on improving the lives of underprivileged children in Egypt. They provide education, healthcare, and social support to vulnerable communities, aiming to create a brighter future for the next generation.' }
    ];
    setOrganizations(dummyOrganizations);
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions, such as clearing session or redirecting to login page
    // For simplicity, I'm just redirecting to the login page here
    window.location.href = '/AdminLogin';
  };

  // Function to handle back button click
  const handleBack = () => {
    if (isDetailPage) {
      setIsDetailPage(false);
    } else {
      // Navigate back to AdminHome page
      window.location.href = '/AdminHome';
    }
  };

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle organization click
  const handleOrganizationClick = (organization) => {
    setSelectedOrganization(organization);
    setIsDetailPage(true);
  };

  // Function to handle organization deletion
  const handleDeleteOrganization = (organizationId) => {
    // Filter out the organization with the given ID
    const updatedOrganizations = organizations.filter(org => org.id !== organizationId);
    // Update the organizations state
    setOrganizations(updatedOrganizations);
  };

  // Function to handle filter option change
  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  // Filter organizations based on search term and filter option
  const filteredOrganizations = organizations.filter(organization => {
    const isMatched = organization.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (filterOption) {
      return isMatched && organization.type === filterOption;
    } else {
      return isMatched;
    }
  });

  return (
    <div className="container-fluid p-0 m-0" style={{ width: '100vw', height: '100vh', color:"white" }}>
        <br/><br/>
      <h1 className="display-3" style={{ fontWeight: 400 }}>Registered Organizations</h1> <br/>
      <div className="contianer mb-3 d-flex justify-content-between align-items-center" style={{ maxWidth: "1500px",margin: "0 auto" }}>
      </div>
      <div className='align-items-center' style={{  justifyContent: "center" }}>
        <div class="container text-center">
            <div className='row'>
                <div class="col">
                    <button className="btn btn-primary mb-3" style={{ paddingLeft: "30px", paddingRight: "30px", alignItems: "center" }} onClick={handleBack}>Back</button>&nbsp;
                </div>
                <div class="col">
                    <input
                        type="text"
                        className="form-control input-group input-group-sm mb-3"
                        placeholder="Search by Name"
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ width: "250px" }}
                     />
                </div>
                
            </div>
            <div className='row'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className='col-4 offset-1'>
                <select className="form-select " value={filterOption} onChange={handleFilterChange}>
                    <option value="">All</option>
                    <option value="NGO">NGO</option>
                    <option value="Charity">Charity</option>
                    <option value="Non-profit">Non-profit</option>
                </select>
                </div>
            </div>
            
        </div>
        
        {isDetailPage ? (
          <div className="mt-3">
            <h4>{selectedOrganization.name}</h4>
            <p>Contact: {selectedOrganization.contact}</p>
            <p>Address: {selectedOrganization.address}</p>
            <p>Type: {selectedOrganization.type}</p>
            <p>Description: {selectedOrganization.description}</p>
          </div>
        ) : (
          <table className="table" style={{ width: "80%" , margin: "20px auto 0" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrganizations.map(organization => (
                <tr key={organization.id}>
                  <td>{organization.id}</td>
                  <td>{organization.name}</td>
                  <td>{organization.contact}</td>
                  <td>{organization.address}</td>
                  <td>{organization.type}</td>
                  <td>
                  <div class="btn-group" role="group" >
                    <button className="btn btn-primary" onClick={() => handleOrganizationClick(organization)}>More Details</button>
                    <button className="btn btn-danger ml-2" onClick={() => handleDeleteOrganization(organization.id)}>Delete</button>
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdRegisteredOrganizations;
