import React, { useState } from 'react';

const BloodDonations = () => {
  const [patientName, setPatientName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalArea, setHospitalArea] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const handleSubmitbutton = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = '/OrganizationHome'; // Redirect to the specified URL
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bloodDonationDetails = { patientName, bloodType, hospitalName, hospitalArea, governorate, hospitalAddress };
    console.log(bloodDonationDetails); // You can use this data as needed, for example, send it to the server
    // Clear form fields
    setPatientName('');
    setBloodType('');
    setHospitalName('');
    setHospitalArea('');
    setGovernorate('');
    setHospitalAddress('');
  };

  return (
    <div className="container rounded p-3" style={{ color: "white", backgroundColor: "#34404b" }}>
  <h2 className="mb-4">Blood Donations Form</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="patientName" className="form-label">Patient Name:</label>
      <input type="text" placeholder='Patient Name' className="form-control" id="patientName" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
    </div>
    <div className="mb-3">
      <label htmlFor="bloodType" className="form-label">Blood Type:</label>
      <select className="form-select" id="bloodType" value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
        <option value="">Select</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="hospitalName" className="form-label">Hospital Name:</label>
      <input type="text" placeholder='Hospital Name' className="form-control" id="hospitalName" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
    </div>
    <div className="mb-3">
      <label htmlFor="hospitalArea" className="form-label">Hospital Area:</label>
      <input type="text" placeholder='Hospital Area' className="form-control" id="hospitalArea" value={hospitalArea} onChange={(e) => setHospitalArea(e.target.value)} />
    </div>
    <div className="mb-3">
      <label htmlFor="governorate" className="form-label">Governorate:</label>
      <input type="text" placeholder='governorate' className="form-control" id="governorate" value={governorate} onChange={(e) => setGovernorate(e.target.value)} />
    </div>
    <div className="mb-3">
      <label htmlFor="hospitalAddress" className="form-label">Hospital Address:</label>
      <input type="text" placeholder='Hospital Address' className="form-control" id="hospitalAddress" value={hospitalAddress} onChange={(e) => setHospitalAddress(e.target.value)} />
    </div>
    <button type="submit" className="btn btn-primary mb-3" onClick={handleSubmitbutton}>Submit For Approval</button>
  </form>
  <button className="btn btn-secondary" onClick={() => window.location.href = 'http://localhost:5173/PendingPosts'}>
    View Pending Posts
  </button>
</div>


  );
};

export default BloodDonations;
