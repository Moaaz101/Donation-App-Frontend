import filter from '../assets/filterimage.png';
import React, { useState, useEffect } from 'react';


function FilterBar({ currentCategory, onFilter }) {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [season, setSeason] = useState('');
  const [foodType, setFoodType] = useState('');
  const [medicalType, setMedicalType] = useState('');
  const [schoolType, setSchoolType] = useState('');
  const [hospitalAddress, SetHospitalAddress] = useState('');
  const [hospitalName, SetHospitalName] = useState('');
  const [toyType, SetToyType] = useState('');
  const [subject, SetSubject] = useState('');
  const [address, SetAddress] = useState('');
  const [speciality, SetSpeciality] = useState('');
  const [organizationName, SetOrganizationName] = useState('');



  const handleRemoveFilter = () => {
    // Reset all state variables
    setAge('');
    setGender('');
    setSeason('');
    setFoodType('');
    setMedicalType('');
    setSchoolType('');
    SetHospitalAddress('');
    SetHospitalName('');
    SetToyType('');
    SetSubject('');
    SetAddress('');
    SetSpeciality('');
    SetOrganizationName('');
  };
  
  useEffect(() => {
    // After resetting state variables, trigger filtering action
    const handleFiltering = () => {
      onFilter({ age, gender, season, foodType, medicalType, schoolType, hospitalName, hospitalAddress, toyType, subject, address, speciality, organizationName });
    };
    handleFiltering();
  }, [age, gender, season, foodType, medicalType, schoolType, hospitalName, hospitalAddress, toyType, subject, address, speciality, organizationName]); // Empty dependency array ensures this effect runs only once after initial render
  
  
  
  const handleFilter = () => {
    onFilter({ age, gender, season, foodType, medicalType, schoolType, hospitalName, hospitalAddress, toyType, subject, address, speciality, organizationName });
  };


  const renderInputs = () => {
    switch (currentCategory) {
      case 'Clothes':
        return (
          <div className="row align-items-center">
                <div className="col-auto">
                  <div className="btn-group" role="group" aria-label="Age">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-hover-bg': '#b0b0b0', '--bs-btn-active-bg': '#525252' }}
                    >
                      {age === '' ? 'Age' : age}
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" onClick={() => setAge('8-16')}>8-16</a></li>
                      <li><a className="dropdown-item" onClick={() => setAge('16-21')}>16-21</a></li>
                      <li><a className="dropdown-item" onClick={() => setAge('25-30')}>25-30</a></li>
                      <li><a className="dropdown-item" onClick={() => setAge('30-45')}>30-45</a></li>
                      <li><a className="dropdown-item" onClick={() => setAge('All')}>All</a></li>

                    </ul>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="btn-group" role="group" aria-label="Season">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-hover-bg': '#b0b0b0', '--bs-btn-active-bg': '#525252' }}
                    >
                      {season === '' ? 'Season' : season}
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" onClick={() => setSeason('Summer')}>Summer</a></li>
                      <li><a className="dropdown-item" onClick={() => setSeason('Winter')}>Winter</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="btn-group" role="group" aria-label="Gender">
                    <button
                      type="button"
                      className={`btn btn-primary ${gender === 'Male' ? 'active' : ''}`}
                      onClick={() => setGender('Male')}
                      style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className={`btn btn-primary ${gender === 'Female' ? 'active' : ''}`}
                      onClick={() => setGender('Female')}
                      style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
                    >
                      Female
                    </button>
                  </div>
                </div>
              </div>
        );
      case 'Food':
        return (
             <>
                  <div className="btn-group">
                  <button className="btn btn-outline-custom" type="submit" onClick={handleFilter}>
                  Filter ✤
                 </button>
                  <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: '#1d7f34' }}>
                  <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                  <li><a className="dropdown-item" onClick={() => setFoodType('Canned Foods')}>Canned Foods</a></li>
                  <li><a className="dropdown-item" onClick={() => setFoodType('Baked Goods')}>Baked Goods</a></li>
                  <li><a className="dropdown-item" onClick={() => setFoodType('Fresh Meals')}>Fresh Meals</a></li>
                  <li><a className="dropdown-item" onClick={() => setFoodType('Vegetables')}>Vegetables</a></li>
                  <li><a className="dropdown-item" onClick={() => setFoodType('Fruits')}>Fruits</a></li>

                  </ul>
                </div>

          </>
        );
      case 'Medical Supplies':
        return (
          <>
          <div className="btn-group">
          <button className="btn btn-outline-custom" type="submit" onClick={handleFilter}>
          Filter ✤
         </button>
          <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: '#1d7f34' }}>
          <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" onClick={() => setMedicalType('Medical Equipment')}>Medical Equipment</a></li>
          <li><a className="dropdown-item" onClick={() => setMedicalType('Medical Devices')}>Medical Devices</a></li>
          <li><a className="dropdown-item" onClick={() => setMedicalType('Medication')}>Medication</a></li>
          </ul>
        </div>

  </>
        );
      case 'School Supplies':
        return (
          <>
          <div className="btn-group">
          <button className="btn btn-outline-custom" type="submit" onClick={handleFilter}>
          Filter ✤
         </button>
          <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: '#1d7f34' }}>
          <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
          <li><a className="dropdown-item" onClick={() => setSchoolType('Books')}>Books</a></li>
          <li><a className="dropdown-item" onClick={() => setSchoolType('Stationary')}>Stationary</a></li>
          </ul>
        </div>

  </>
        );
      case 'Blood Donations':
        return (
          <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Hospital Name"
                      value={hospitalName}
                      onChange={(e) => SetHospitalName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Address (Governate/Area)"
                      value={hospitalAddress}
                      onChange={(e) => SetHospitalAddress(e.target.value)}
                    />
                  </div>
                </div>
        );
      case 'Toys':
        return (
          
          <div className="row align-items-center">
          <div className="col-auto">
              <div className="btn-group" role="group" aria-label="Age">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-hover-bg': '#b0b0b0', '--bs-btn-active-bg': '#525252' }}
                >
                  {age === '' ? 'Age' : age}
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" onClick={() => setAge('8-16')}>8-16</a></li>
                  <li><a className="dropdown-item" onClick={() => setAge('5-45')}>5-45</a></li>
                </ul>
              </div>
            </div>

        
          <div className="col-auto">
            <div className="btn-group" role="group" aria-label="Gender">
              <button
                type="button"
                className={`btn btn-primary ${gender === 'Male' ? 'active' : ''}`}
                onClick={() => setGender('Male')}
                style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
              >
                Male
              </button>
              <button
                type="button"
                className={`btn btn-primary ${gender === 'Female' ? 'active' : ''}`}
                onClick={() => setGender('Female')}
                style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
              >
                Female
              </button>
              <button
                type="button"
                className={`btn btn-primary ${gender === 'Both' ? 'active' : ''}`}
                onClick={() => setGender('Both')}
                style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
              >
                Both
              </button>
            </div>
          </div>
        
          <div className="col">
            <div className="btn-group" role="group" aria-label="Toy Type">
              <button
                type="button"
                className={`btn btn-primary ${toyType === 'Board Games' ? 'active' : ''}`}
                onClick={() => SetToyType('Board Games')}
                style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
              >
                Board
              </button>
              <button
                type="button"
                className={`btn btn-primary ${toyType === 'Dolls' ? 'active' : ''}`}
                onClick={() => SetToyType('Dolls')}
                style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
              >
                Dolls
              </button>
              <button
                type="button"
                className={`btn btn-primary ${toyType === 'Sports' ? 'active' : ''}`}
                onClick={() => SetToyType('Sports')}
                style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
              >
                Sports
              </button>
              <button
                type="button"
                className={`btn btn-primary ${toyType === 'Outdoor' ? 'active' : ''}`}
                onClick={() => SetToyType('Outdoor')}
                style={{ '--bs-btn-bg': '#8d8d8d', '--bs-btn-active-bg': '#525252', '--bs-btn-hover-bg':'#b0b0b0' ,'--bs-btn-border-color':' #d1d1d1','--bs-btn-hover-border-color': '#000000'}}
              >
                Out-Doors
              </button>
            </div>
          </div>
        </div>
        
          
        );
        case 'Teaching Posts':
        return (
          <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => SetSubject(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Address (Governate/Area)"
                      value={address}
                      onChange={(e) => SetAddress(e.target.value)}
                    />
                  </div>
                </div>
        );
        case 'Medical Visits':
        return (
          <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Organization Name"
                      value={organizationName}
                      onChange={(e) => SetOrganizationName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control input-field"
                      placeholder="Address (Governate/Area)"
                      value={address}
                      onChange={(e) => SetAddress(e.target.value)}
                    />
                  </div>
                  <div className="btn-group col">
                      <button className="btn btn-outline-custom" type="submit" onClick={handleFilter}>
                      Filter ✤
                    </button>
                      <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: '#1d7f34' }}>
                      <span className="visually-hidden">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu">
                      <li><a className="dropdown-item" onClick={() => SetSpeciality('Dentistry')}>Dentistry</a></li>
                      <li><a className="dropdown-item" onClick={() => SetSpeciality('Pediatrics')}>Pediatrics</a></li>
                      <li><a className="dropdown-item" onClick={() => SetSpeciality('Surgery')}>Surgery</a></li>
                      <li><a className="dropdown-item" onClick={() => SetSpeciality('Neurology')}>Neurology</a></li>
                      <li><a className="dropdown-item" onClick={() => SetSpeciality('Psychiatry')}>Psychiatry</a></li>
                      <li><a className="dropdown-item" onClick={() => SetSpeciality('Dermatology')}>Dermatology</a></li>




                      </ul>
                 </div>
                </div>
        );
      default:
        return null;
    }
  };

  return (
    <nav className="navbar bg-body-tertiary rounded">
      <div className="container" style={{ maxWidth: '1300px' }}>
        <div className="row align-items-center">
          
          <div className="col ps-0">
            {currentCategory && (
              <div className="filter-inputs">
                {renderInputs()}
              </div>
            )}
          
          </div>
          <div className="col-auto pe-0">
            {(true) && (
              <a className="navbar-brand" href="#">
                <button className="btn btn-outline-custom" type="submit" onClick={handleRemoveFilter}>
                  Remove Filter ✣
                </button>
              </a>
            )}
          </div>
          
        </div>
      </div>
    </nav>
  );
}

export default FilterBar;
