import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.css';
import { Link } from 'react-router-dom';
import car from '../assets/car.png';
import truck from '../assets/truck.png';
import bike from '../assets/bike.png';
import { useLocation } from 'react-router-dom';



function Transportation() {
  const [selectedTransportation, setSelectedTransportation] = useState('');
  const [dateTime, setDateTime] = useState('');
  const location = useLocation();
  const userType = new URLSearchParams(location.search).get('userType');


  const handleDoneClick = () => {
    // Check if any input is empty
    if (selectedTransportation === '' || dateTime === '') {
      // Show an alert indicating that all fields must be filled
      alert('Please select a transportation method and provide a date and time.');
    } else {
      // Show a success message
      alert('Your Donation successful!\nYou will be redirected to your Homepage\nYour kindness is a beacon of hope, bringing warmth and comfort to those in need');
      // Construct the redirect URL
      let redirectUrl = '/DonorHome';
      if (userType) {
        redirectUrl += `?userType=${userType}`;
      }
      // Redirect to the constructed URL
      window.location.href = redirectUrl;
    }
  };

  useEffect(() => {
    if (selectedTransportation !== '') {
      console.log(`Selected transportation method: ${selectedTransportation}`);
    }
  }, [selectedTransportation]);

  const handleClick = (transportation) => {
    setSelectedTransportation(transportation);
  };
  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  return (
    <div className="container mt-5">
    <div className="card custom-card">
      <div className="card-body">
        <label className="form-check-label custom-label2" htmlFor="gridCheck">
          Please pick a transportation method
        </label>
        <div className="d-flex justify-content-between">
          <div className="text-center">
            <button
              className={`btn ${selectedTransportation === 'Truck' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => handleClick('Truck')}
            >
              <img src={truck} alt="Truck" style={{ width: '100px', height: '100px' }} />
            </button>
            <div>Truck</div>
          </div>
          <div className="text-center">
            <button
              className={`btn ${selectedTransportation === 'Car' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => handleClick('Car')}
            >
              <img src={car} alt="Car" style={{ width: '100px', height: '100px' }} />
            </button>
            <div>Car</div>
          </div>
          <div className="text-center">
            <button
              className={`btn ${selectedTransportation === 'Motorcycle' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => handleClick('Motorcycle')}
            >
              <img src={bike} alt="Motorcycle" style={{ width: '100px', height: '100px' }} />
            </button>
            <div>Motorcycle</div>
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="datetime">Select Date and Time  : <span>&nbsp; </span> </label>
          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={dateTime}
            onChange={handleDateTimeChange}
          />
        </div>
        <div className="text-center mt-3">
            <button className="btn btn-primary"
                onClick={handleDoneClick}
            >Done</button>
          </div>
      </div>
    </div>
  </div>
  );
}

export default Transportation;