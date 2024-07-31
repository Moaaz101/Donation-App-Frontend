import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import { Link } from 'react-router-dom';

function DonorLogin() {
  const [checksPassed, setChecksPassed] = useState(false); // State to track whether checks have passed
  const [email, setEmail] = useState(''); // State to store email input value
  const [password, setPassword] = useState(''); // State to store password input value
  const [userType, setUserType] = useState(''); // State to represent the user type

  useEffect(() => {
    // Check if checks have passed and then redirect
    if (checksPassed) {
      // Construct the redirect URL with the userType as a query parameter
      let redirectUrl = '/DonorHome';
      if (userType) {
        redirectUrl += `?userType=${userType}`;
      }
      // Redirect to the constructed URL
      window.location.href = redirectUrl;
    }
  }, [checksPassed, userType]);

  // Function to handle form submission
  const handleSubmit = () => {
    // Perform your checks here
    if (!email || !password) {
      alert('Please fill in all fields.');
      return; // Exit early if any field is empty
    }

    // Check the email to determine the user type
    if (email === 'donor@gmail.com') {
      setUserType('donor');
    } else if (email === 'doctor@gmail.com') {
      setUserType('doctor');
    } 
    else if (email === 'teacher@gmail.com') {
      setUserType('teacher');
    }else {
      alert('Invalid email.');
      return;
    }

    // Check the password
    if (password === 'password') {
      setChecksPassed(true);
    } else {
      alert('Invalid password.');
    }
  };

  return (
    <div className="container mt-5">
        <div class="btn-group" role="group">
            <Link to="/AdminLogin">
                <button type="button" class="btn btn-secondary">Login as an Admin</button>
            </Link> &nbsp;
            <Link to="/OrganizationLogin">
                <button type="button" class="btn btn-secondary">Login as an organization rep.</button>
            </Link>
        </div>
      <div className="card custom-card">
        <div className="card-body">
          <label className="form-check-label custom-label2" htmlFor="gridCheck">
             Donor Login
          </label>
          <form >
            <div className="form-group">
              <label htmlFor="inputEmail"></label>
              <input
                type="email"
                className="form-control input-field"
                id="inputEmail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword"></label>
              <input
                type="password"
                className="form-control input-field"
                id="inputPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-3">
              {/* Add margin-top to create space */}
              <button type="button" className="btn btn-primary" style={{ backgroundColor: '#0E46A3' }} onClick={handleSubmit}>
                Login
              </button>
            </div>
            <div>
              <a href="/Index" style={{ fontSize: '0.8em' }}>Don't have an account?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonorLogin;