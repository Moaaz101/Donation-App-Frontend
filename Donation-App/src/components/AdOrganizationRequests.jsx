import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function AdOrganizationRequests() {
  const [OrganizationRequests, setOrganizationRequests] = useState([]); // State to store donor requests

  useEffect(() => {
    // Fetch donor requests from the server or API
    // For demonstration purposes, initializing with dummy data
    const dummyOrganizationRequests = [
        { id: 1, name: 'Resala', contact: 'Marwan Hassan', date: '2024-05-10', status: 'Pending' },
        { id: 2, name: 'Egyptian Food Bank', contact: 'Tarek Adnan', date: '2024-04-19', status: 'Pending'},
        { id: 3, name: 'Hayah Karima', contact: 'Sami Ahmed', date: '2024-03-07', status: 'Accepted' }
      ];
    setOrganizationRequests(dummyOrganizationRequests);
  }, []);
 
  // Function to handle accepting donor request
  const handleAcceptRequest = (id) => {
    // Update the status of the donor request with the given ID to "Accepted"
    setOrganizationRequests(prevRequests => prevRequests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'Accepted' };
      }
      return request;
    }));
  };

  // Function to handle rejecting donor request
  const handleRejectRequest = (id) => {
    // Update the status of the donor request with the given ID to "Rejected"
    setOrganizationRequests(prevRequests => prevRequests.map(request => {
      if (request.id === id) {
        return { ...request, status: 'Rejected' };
      }
      return request;
    }));
  };

  // Function to handle back button click
  const handleBack = () => {
    // Navigate back to AdminHome page
    window.history.back();
  };

  // Function to handle downloading information
  const handleDownloadInformation = (id) => {
    // Create a link element
    const link = document.createElement('a');
    link.href = `/src/pdfs/Organization_information_${id}.pdf`; // Replace '/path/to/' with the actual path
    link.setAttribute('download', `Organization_information_${id}.pdf`);
    // Append the link to the document body
    document.body.appendChild(link);
    // Click the link to initiate the download
    link.click();
    // Remove the link from the document body after download
    document.body.removeChild(link);
  };

  return (
    <div className="container-fluid p-0 m-0" style={{ width: '100vw', height: '100vh', color: 'white' }}> 
    <br></br><br></br>
      <h1 className="display-3" style={{ fontWeight: 400 }}>Organization Requests</h1>
      <br></br><br></br>

      <div className="mb-3">
        <button className="btn btn-primary mr-2 mb-3" style={{ paddingLeft: "30px", paddingRight: "30px", alignItems: "center" }} onClick={handleBack}>Back</button>
      </div>
      <table className="table" style={{ width: "80%" , margin: "20px auto 0" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>contact</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {OrganizationRequests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.contact}</td>
              <td>{request.status}</td>
              <td>{request.date}</td>
              <td>
                <div class="btn-group" role="group">
                    <button className="btn btn-success" onClick={() => handleAcceptRequest(request.id)}>Accept</button>
                    <button className="btn btn-danger ml-2" onClick={() => handleRejectRequest(request.id)}>Reject</button>
                    <button className="btn btn-primary ml-2" onClick={() => handleDownloadInformation(request.id)}>Download Information</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdOrganizationRequests;

