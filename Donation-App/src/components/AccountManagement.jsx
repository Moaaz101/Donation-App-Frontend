import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Card.css';
import './styles.css';
import Select from 'react-select';
import markerIcon1 from '../assets/markerIcon1.png'


function AccountManagement() {
  const location = useLocation(); // Use useLocation hook to get the location object
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(true);
  const [userType, setUserType] = useState('');
  const [clinic, setClinic] = useState('');
  const [cases, setCases] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showDeleteButton, setShowDeleteButton] = useState(false); // State to control the visibility of the delete button
  const [checksPassed, setChecksPassed] = useState(false); // State to track whether checks have passed
  const [students, setStudents] = useState('');
  const [classes, setClasses] = useState('');
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


  useEffect(() => {
    // Check if checks have passed and then redirect
    if (checksPassed) {
      window.location.href = '/DonorHome'; // Redirect to the specified URL
    }
  }, [checksPassed]); 

  const handleSubmit = () => {
    if (email || firstName || lastName || address || phoneNumber || classes || students || clinic || cases) {
        alert('Your changes has been succesfully saved you will be redirected to your home page')
        let redirectUrl = '/DonorHome';
      if (userType) {
        redirectUrl += `?userType=${userType}`;
      }
      // Redirect to the constructed URL
      window.location.href = redirectUrl;
    
    } else {
      alert('You need to modify at least one field to apply.');
    }
  };


  const handlePasswordSubmit = () => {
    if (password === 'password') {
      const params = new URLSearchParams(location.search);
      setUserType(params.get('userType'));
      setShowPasswordConfirmation(false);
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account?');
    if (confirmDelete) {
      // Perform account deletion logic here
      alert('Your account was removed successfully.');
      // Redirect the user to a link after account deletion
      window.location.href = '/';
    }
  };

  const handleShowMoreOptions = () => {
    setShowDeleteButton(true); // Show the delete button when "Show More Options" label is clicked
  };

  return (
    <div className="container mt-5">
      <div className="card custom-card">
        <div className="card-body">
          {showPasswordConfirmation ? (
            // Password Confirmation Form
            <form>
              <div className='form-group text-center'>
                <h3>Please enter your current password to proceed:</h3>
                <input
                  type="password"
                  className='form-control input-field mx-auto'
                  placeholder='Current Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '300px' }} 
                />
              </div>
              <div className="mt-3 text-center">
                <button type="button" className="btn btn-primary" style={{ backgroundColor: '#0E46A3' }} onClick={handlePasswordSubmit}>
                  Submit
                </button>
              </div>
            </form>
          ) : (
            // Account Modification Form
            <div>
              {userType === 'donor' && (
                // Donor Account Modification Form
                <div className="container mt-5 d-flex justify-content-center custom-card-container">
                  <div className="card custom-card">
                    <div className="card-body d-flex flex-column align-items-center" >
                      <label className="form-check-label custom-label2" htmlFor="gridCheck">
                        Modify Account Details
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
                          <label htmlFor="inputlastname"></label>
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
                          <label htmlFor="inputCity"></label>
                          <input 
                            type="text" 
                            className="form-control input-field" 
                            id="inputCity" 
                            placeholder="Address" 
                            value={address}
                            onChange={(e)=>setAddress(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="inputphone"></label>
                          <input 
                            type="text" 
                            className="form-control input-field" 
                            id="inputphone" 
                            placeholder="Phone Number" 
                            value={phoneNumber}
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                          />
                        </div>
                      </form>
                      <div className="mt-3"> {/* Add margin-top to create space */}
                        <button type="button" className="btn btn-primary" style={{ backgroundColor: '#0E46A3' }} onClick={handleSubmit}>
                          Apply
                        </button>
                      </div>
                      {/* Delete Account Button */}
                      {showDeleteButton && userType === 'donor' && (
                        <div className="mt-3"> {/* Add margin-top to create space */}
                          <button type="button" className="btn btn-danger" onClick={handleDeleteAccount}>
                            Delete Account
                          </button>
                        </div>
                      )}
                      {/* Show More Options Label */}
                      {!showDeleteButton && (
                        <div className="mt-3"> {/* Add margin-top to create space */}
                        <span
                          className="badge badge-primary show-more-options"
                          style={{ cursor: 'pointer', backgroundColor: '#0d6efd' }}
                          onClick={handleShowMoreOptions}
                        >
                          Show More Options (e.g., delete account)
                        </span>
                      </div>
                      
                      )}
                    </div>
                  </div>
                </div>
              )}
              {userType === 'doctor' && (
                 <div className="container mt-5 d-flex justify-content-center custom-card-containers" >
                 <div className="card custom-card">
                   <div className="card-body d-flex flex-column align-items-center">
                   <label className="form-check-label custom-label2" htmlFor="gridCheck">
                             Modify Doctor Data
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
                       </div>
                       <div className="mt-3"> {/* Add margin-top to create space */}
                       <button type="button" className="btn btn-primary" style={{ backgroundColor: '#0E46A3' }}  onClick={handleSubmit}>
                         Apply
                       </button>
                       </div>
                     </form>
                     {showDeleteButton && userType === 'doctor' && (
                        <div className="mt-3"> {/* Add margin-top to create space */}
                          <button type="button" className="btn btn-danger" onClick={handleDeleteAccount}>
                            Delete Account
                          </button>
                        </div>
                      )}
                      {/* Show More Options Label */}
                      {!showDeleteButton && (
                        <div className="mt-3"> {/* Add margin-top to create space */}
                        <span
                          className="badge badge-primary show-more-options"
                          style={{ cursor: 'pointer', backgroundColor: '#0d6efd' }}
                          onClick={handleShowMoreOptions}
                        >
                          Show More Options (e.g., delete account)
                        </span>
                      </div>
                      
                      )}
                   </div>
                 </div>
               </div>
              )}
              {userType === 'teacher' && (
                <div className="container mt-5">
                <div className="card custom-card">
                  <div className="card-body">
                  <label className="form-check-label custom-label2" htmlFor="gridCheck">
                  Modify Teacher Account Details
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
                      <div className="mt-3"> {/* Add margin-top to create space */}
                      <button type="button" className="btn btn-primary" style={{ backgroundColor: '#0E46A3' }}  onClick={handleSubmit}>
                        Apply
                      </button>
                      </div>
                    </form>
                    {showDeleteButton && userType === 'teacher' && (
                        <div className="mt-3"> {/* Add margin-top to create space */}
                          <button type="button" className="btn btn-danger" onClick={handleDeleteAccount}>
                            Delete Account
                          </button>
                        </div>
                      )}
                      {/* Show More Options Label */}
                      {!showDeleteButton && (
                        <div className="mt-3"> {/* Add margin-top to create space */}
                        <span
                          className="badge badge-primary show-more-options"
                          style={{ cursor: 'pointer', backgroundColor: '#0d6efd' }}
                          onClick={handleShowMoreOptions}
                        >
                          Show More Options (e.g., delete account)
                        </span>
                      </div>
                      
                      )}
                  </div>
                </div>
              </div>
              )}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default AccountManagement;
