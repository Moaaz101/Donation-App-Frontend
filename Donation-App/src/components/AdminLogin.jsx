import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import { Link } from 'react-router-dom';

function AdminLogin() {
  const [checksPassed, setChecksPassed] = useState(false); // State to track whether checks have passed
  const [email, setEmail] = useState(''); // State to store email input value
  const [password, setPassword] = useState(''); // State to store password input value

  useEffect(() => {
    // Check if checks have passed and then redirect
    if (checksPassed) {
      window.location.href = '/AdminHome'; // Redirect to the specified URL
    }
  }, [checksPassed]); // Trigger the effect whenever checksPassed changes

  // Function to handle form submission
  const handleSubmit = () => {
    // Perform your checks here
    if (!email || !password) {
      alert('Please fill in all fields.');
      return; // Exit early if any field is empty
    }

    else if((email==="admin@gmail.com" && password==="password") || (email==="admin2@gmail.com" && password==="admin2"))
    {
      setChecksPassed(true);
    }

    // Perform additional checks if needed
    else
    {
      alert("Email and password do not match");
      return;
    }
    // If all checks pass, set checksPassed state to true
  };


  
  return (
    <div className="container mt-5">
        <div class="btn-group" role="group">
            <Link to="/DonorLogin">
                <button type="button" class="btn btn-secondary">Login as a Donor</button>
            </Link> &nbsp;
            <Link to="/OrganizationLogin">
                <button type="button" class="btn btn-secondary">Login as an organization rep.</button>
            </Link>
        </div>
      <div className="card custom-card">
        <div className="card-body">
        <label className="form-check-label custom-label2" htmlFor="gridCheck">
                  Admin Login
                </label>
          <form>
            <div className="form-group">
              <label htmlFor="inputEmail"></label>
              <input
              type="email" 
              className="form-control input-field" 
              id="inputEmail" 
              placeholder="Email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="mt-3"> {/* Add margin-top to create space */}
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

export default AdminLogin;
