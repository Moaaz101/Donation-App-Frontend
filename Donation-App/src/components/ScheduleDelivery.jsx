import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ScheduleDelivery() {
    const DatePicker = () => {
        const [selectedDateTime, setSelectedDateTime] = useState(null); // State to store selected date and time
        const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to control visibility of success message
      
        // Function to handle date and time selection
        const handleDateTimeChange = (event) => {
          setSelectedDateTime(event.target.value); // Update selected date and time
        };
      
        // Function to handle "Done" button click
        const handleDone = () => {
          setShowSuccessMessage(true); // Show success message
        };

        return (
            <div>
              {/* Date and time picker */}
              <input type="datetime-local" value={selectedDateTime} onChange={handleDateTimeChange} />
              {/* "Done" button */}
              <button onClick={handleDone}>Done</button>
              
              {/* Success message */}
              {showSuccessMessage && (
                <div className="success-message">
                  Pick Up date and time selected successfully !!!!  
                </div>
              )}
            </div>
          );
    };

  return (
    <div>
      <h2>Schedule PickUp</h2>
      {/* Render the DatePicker component */}
      <DatePicker />
      {/* Button for Home */}
      <Link to="http://localhost:5173/OrganizationHome">
        <button>Home</button>
      </Link>
    </div>
  );
}

export default ScheduleDelivery;
