import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import markerIcon1 from '../assets/markerIcon1.png'
import { Link } from 'react-router-dom';


function DocRegister() {
  const [checksPassed, setChecksPassed] = useState(false); // State to track whether checks have passed
  const [email, setEmail] = useState(''); // State to store email input value
  const [password, setPassword] = useState(''); // State to store password input value
  const [address, setAdress] = useState(''); // State to store city input value
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [clinic, setClinic] = useState('');
  const [cases, setCases] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false); // State to track file upload


  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileUploaded(true);
    } else {
      setFileUploaded(false);
    }
  };

  
  const handleMaleCheckboxChange = () => {
    setIsMaleChecked(!isMaleChecked);
    setIsFemaleChecked(false); // Uncheck female checkbox when male is checked
    setGender("Male")
  };

  const handleFemaleCheckboxChange = () => {
    setIsFemaleChecked(!isFemaleChecked);
    setIsMaleChecked(false); // Uncheck male checkbox when female is checked
    setGender("Female")
  };

  useEffect(() => {
    // Check if checks have passed and then redirect
    if (checksPassed) {
      window.location.href = '/'; // Redirect to the specified URL 
    }
  }, [checksPassed]); // Trigger the effect whenever checksPassed changes

  // Function to handle form submission
  const handleSubmit = () => {
    // Perform your checks here
    if (!email || !firstName || !password || !lastName || !address || !phoneNumber || !gender || !cases || !clinic) {
      alert('Please fill in all fields.');
      return; // Exit early if any field is empty
    }

    else if (email.includes("Moaaz") || email.includes("Hussein") || email.includes("Yahya") || email.includes("Abdelrahman") || email.includes("Mahd")){
      alert('this email already exists')
      return;
    }
    
    else if (password.length <= 8){
      alert('Password must be at least 8 characters')
      return;
    }
        // Check if a file has been uploaded
    else if (!fileUploaded) {
      alert('Please upload qualification documents.');
      return;
        }

    setChecksPassed(true);
  };
  return (
    <div className="container mt-5 d-flex justify-content-center custom-card-containers" >
    <div className="card custom-card">
      <div className="card-body d-flex flex-column align-items-center">
      <label className="form-check-label custom-label2" htmlFor="gridCheck">
                Doctor Registration
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
            <label htmlFor="inputfirstname"></label>
            <input
            type="firstname" 
            className="form-control input-field" 
            id="inputfirstname" 
            placeholder="First Name" 
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
             />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail"></label>
            <input
            type="lastname" 
            className="form-control input-field" 
            id="inputlastname" 
            placeholder="Last Name" 
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
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
          <div className="form-group">
            <label htmlFor="inputCity"></label>
            <input 
            type="text" 
            className="form-control input-field" 
            id="inputCity" 
            placeholder="Address" 
            value={address}
            onChange={(e)=>setAdress(e.target.value)}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="inputnumber"></label>
            <input 
            type="text" 
            className="form-control input-field" 
            id="inputphone" 
            placeholder="Phone Number" 
            value={phoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input-group mb-1">
            <input
              type="text"
              className="form-control input-field"
              placeholder="Clinic Location"
              aria-label="Clinic Location"
              aria-describedby="basic-addon2"
              value={clinic}
              onChange={(e) => setClinic(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="button" style={{ width: 'auto', padding: '6px', backgroundColor: '#0E46A3' }} title="Pin Location">
                <img src={markerIcon1} alt="Description" style={{ width: '20px', height: '20px' }} /> {/* Adjust width and height as needed */}
              </button>
          </div>
          <div className="form-group mb-3" >
            <label htmlFor="inputCount"></label>
            <input 
            type="text" 
            className="form-control input-field" 
            id="inputCount" 
            placeholder="Number of pro-bono cases" 
            value={cases}
            onChange={(e)=>setCases(e.target.value)}
            />
          </div>
          <div className="btn-group mt-2" role="group" aria-label="Basic checkbox toggle button group">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck1"
                    autoComplete="off"
                    checked={isMaleChecked}
                    onChange={handleMaleCheckboxChange}
                  />
                  <label className="btn btn-outline-primary" htmlFor="btncheck1">
                    Male
                  </label>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="btncheck2"
                    autoComplete="off"
                    checked={isFemaleChecked}
                    onChange={handleFemaleCheckboxChange}
                  />
                  <label className="btn btn-outline-primary" htmlFor="btncheck2">
                    Female
                  </label>
                </div>
              
                <div className="mt-4">
              <label htmlFor="qualificationFiles" className="btn btn-primary" style={{ backgroundColor: '#0E46A3' }}>
                Upload Qualification Documents
              </label>
              <input
                type="file"
                id="qualificationFiles"
                className="visually-hidden"
                onChange={(e) => handleFileUpload(e)}
                multiple
              />
            </div>
          
          <div className="form-group">
          <label htmlFor="inputState"></label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label custom-label" htmlFor="gridCheck">
                I agree to receive updates and notifications via email
              </label>
            </div>
            
          </div>
          <div className="mt-3"> {/* Add margin-top to create space */}
          <button type="button" className="btn btn-primary" style={{ backgroundColor: '#0E46A3' }}  onClick={handleSubmit}>
            Register
          </button>
          </div>
          <br/>
            <Link to="/DonorLogin">
              Already have an account?
            </Link>
        </form>
      </div>
    </div>
  </div>
);
  
}

export default DocRegister