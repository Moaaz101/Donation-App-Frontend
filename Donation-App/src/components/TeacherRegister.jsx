import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import Select from 'react-select';


import { Link } from 'react-router-dom';

function DocRegister() {
  const [checksPassed, setChecksPassed] = useState(false); // State to track whether checks have passed
  const [email, setEmail] = useState(''); // State to store email input value
  const [password, setPassword] = useState(''); // State to store password input value
  const [address, setAdress] = useState(''); // State to store city input value
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [students, setStudents] = useState('');
  const [classes, setClasses] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);
  const subjectsOptions = [
    { value: 'math', label: 'Math' },
    { value: 'science', label: 'Science' },
    { value: 'english', label: 'English' },
    { value: 'art', label: 'Art' },
    { value: 'history', label: 'History' },
    { value: 'music', label: 'Music' },
    { value: 'geography', label: 'Geography' },
    { value: 'physical_education', label: 'Physical Education' },
    { value: 'drama', label: 'Drama' },
    { value: 'biology', label: 'Biology' },
    { value: 'chemistry', label: 'Chemistry' },
    { value: 'physics', label: 'Physics' },
    { value: 'information_technology', label: 'Information Technology' },
    { value: 'foreign_languages', label: 'Foreign Languages' },
    { value: 'social_studies', label: 'Social Studies' },
    { value: 'technology', label: 'Technology' },
    { value: 'philosophy', label: 'Philosophy' },
    { value: 'literature', label: 'Literature' },
    { value: 'algebra', label: 'Algebra' },
    { value: 'geometry', label: 'Geometry' },
  ];
  const handleMaleCheckboxChange = () => {
    setIsMaleChecked(!isMaleChecked);
    setIsFemaleChecked(false); // Uncheck female checkbox when male is checked
    setGender("Male")
  };
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFileUploaded(true);
    } else {
      setFileUploaded(false);
    }
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
    if (!email || !firstName || !lastName || !password || !address || !phoneNumber || !gender || !classes || !students) {
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
    
    else if (!fileUploaded) {
      alert('Please upload qualification documents.');
      return;
        }

    // Perform additional checks if needed

    // If all checks pass, set checksPassed state to true
    setChecksPassed(true);
  };
  return (
    <div className="container mt-5">
    <div className="card custom-card">
      <div className="card-body">
      <label className="form-check-label custom-label2" htmlFor="gridCheck">
                Teacher Registration
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
          
          <div className="row">
                <div className="col-md-6 mb-3">
                  <input 
                    type="number" 
                    className="form-control input-field" 
                    id="inputClasses" 
                    min={0}
                    max={100}
                    placeholder="No. of pro-bono classes" 
                    value={classes}
                    onChange={(e) => setClasses(e.target.value)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input 
                    type="number" 
                    className="form-control input-field" 
                    id="inputStudents" 
                    min={0}
                    max={100}
                    placeholder="No. of pro-bono students" 
                    value={students}
                    onChange={(e) => setStudents(e.target.value)}
                  />
                </div>
              </div>
              <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <Select
                      options={subjectsOptions}
                      isMulti
                      placeholder="Select subjects..."
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