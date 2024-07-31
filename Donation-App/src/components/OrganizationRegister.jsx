import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import { Link } from 'react-router-dom';

function OrganizationRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [organizationType, setOrganizationType] = useState('');
  const [organizationAddress, setOrganizationAddress] = useState('');
  const [area, setArea] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [location, setLocation] = useState('');
  const [documents, setDocuments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any field is empty
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !email ||
      !password ||
      !contactNumber ||
      !organizationName ||
      !organizationType ||
      !organizationAddress ||
      !area ||
      !governorate ||
      !location ||
      !documents
    ) {
      alert('Please fill out all fields.');
    } else {
      // Navigate to a new page or perform any other action
      alert('Your Organization has been submitted succesfully you will be redirected to the login page');

      window.location.href = "/OrganizationLogin";

    }
  };

  // Function to handle getting user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation(`${latitude}, ${longitude}`);
      }, (error) => {
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  // Function to handle file uploads
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    // Set the documents state with the selected files
    console.log(files);
  };
  return (
    <div className='container mt-5'>
      <div className="card" style={{ backgroundColor: '#e1e6ea' }}>
        <div className="card-body">
          <h2>Organization Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group mb-3">
              <select
                className="form-control"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Gender"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Organization Name"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Organization Type"
                value={organizationType}
                onChange={(e) => setOrganizationType(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Organization Address"
                value={organizationAddress}
                onChange={(e) => setOrganizationAddress(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Governorate"
                value={governorate}
                onChange={(e) => setGovernorate(e.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <button type="button" className="btn btn-primary mb-2 me-2" onClick={getLocation}>Get Location</button>
              <input
                type="text"
                className="form-control"
                placeholder="Your location will appear here"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                readOnly
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="file"
                className="form-control-file"
                multiple
                onChange={handleFileUpload}
              />
            </div>
            <button type="submit" onClick={handleSubmit} className="form-control btn btn-primary me-2">Submit</button>
            <br/>
            <Link to="http://localhost:5173/OrganizationLogin">
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrganizationRegister;
